"use strict";

import { CheckInStruct } from "./check_in";
import Constants from "./const";
import { InstallationsStruct } from "./installations";

import { Buffer } from "buffer";

type FCMTokenStruct = {
    token:     string;
    timestamp: number;
}

async function sha1(message: string) {
    const msgBuffer  = new TextEncoder().encode(message);
    const hashBuffer = Buffer.from(await crypto.subtle.digest("SHA-1", msgBuffer));
    const hashBase64 = hashBuffer.toString("base64");
    // @ts-expect-error
    const hashBase64Url = hashBase64.replace(/[+/=]/g, m => ({ "+": "-", "/": "_", "=": "" }[m]))
    return hashBase64Url;
}

async function fetchFCMToken(
    android_id:                number | BigInt,
    security_token:            number | BigInt,
    version_info:              string,
    firebaseInstallationsId:   string,
    firebaseInstallationsAuth: string,
) {
    const form = new URLSearchParams({
        "app":     Constants.APPLICATION.PACKAGE_NAME,
        "app_ver": Constants.APPLICATION.VERSION,
        "cert":    Constants.APPLICATION.FINGERPRINT.SHA1,
        "device":  android_id.toString(),
        "sender":  Constants.FIREBASE.MESSAGING_SENDER_ID,
        "info":    version_info,

        "X-app_ver":      Constants.APPLICATION.VERSION,
        "X-app_ver_name": Constants.APPLICATION.VERSION_NAME,
        "X-subtype":      Constants.FIREBASE.MESSAGING_SENDER_ID,

        "X-appid":                            firebaseInstallationsId,
        "X-Goog-Firebase-Installations-Auth": firebaseInstallationsAuth,

        "X-firebase-app-name-hash": await sha1(Constants.FIREBASE.APP_NAME),
        "X-gmp_app_id":             Constants.FIREBASE.APP_ID,
        "X-scope":                  "*",
    });

    const response = await fetch("https://fcmtoken.googleapis.com/register", {
        credentials: "omit",
        headers: {
            "Authorization": `AidLogin ${android_id}:${security_token}`,
            "app": Constants.APPLICATION.PACKAGE_NAME,
        },
        body: form,
        method: "POST",
        mode: "cors"
    });

    const text = await response.text();

    return (new URLSearchParams(text)).get("token") ?? "";
}

async function getFCMToken(
    check_in:      CheckInStruct,
    installations: InstallationsStruct,
) {
    const { fcm_token: fcm_token } = await browser.storage.local.get({
        fcm_token: {
            token: "",
            timestamp: 0,
        },
    }) as { fcm_token: FCMTokenStruct; };

    if (fcm_token.token === "" || fcm_token.timestamp < check_in.timestamp || fcm_token.timestamp < installations.timestamp) {
        fcm_token.token = await fetchFCMToken(
            check_in.id,
            check_in.token,
            check_in.version_info,
            installations.id,
            installations.token
        );
        fcm_token.timestamp = Date.now();

        await browser.storage.local.set({
            fcm_token: fcm_token,
        });
    }
    
    return fcm_token;
}

export { getFCMToken, FCMTokenStruct };