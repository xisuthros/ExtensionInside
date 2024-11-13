import Constants from "./const";
import { FCMTokenStruct } from "./fcm_token";

type DateStruct = {
    date: string;
    timestamp: number;
}

type AppIdStruct = {
    id: string;
    timestamp: number;
}

async function sha256(message: string): Promise<string> {
    const msgBuffer  = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray  = Array.from(new Uint8Array(hashBuffer));
    const hashHex    = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function getDate() {
    const { date: date } = await browser.storage.local.get({
        date: {
            date: "",
            timestamp: 0,
        },
    }) as { date: DateStruct; };

    const response = await fetch("https://json2.dcinside.com/json0/app_check_A_rina_one_new.php", {
        "credentials": "omit",
        "headers": {
            "User-Agent": "dcinside.app"
        },
        "referrer": "http://www.dcinside.com",
        "method": "GET",
        "mode": "cors",
    });

    const json = await response.json();

    if (date.date !== json[0].date) {
        date.date = json[0].date;
        date.timestamp = Date.now();

        await browser.storage.local.set({
            date: date,
        });
    }

    return date;
}

async function fetchAppId(value_token: string, client_token: string) {
    const form = new FormData();

    form.append("value_token",  value_token);
    form.append("signature",    Constants.APPLICATION.FINGERPRINT.SHA256);
    form.append("pkg",          Constants.APPLICATION.PACKAGE_NAME);
    form.append("vCode",        Constants.APPLICATION.VERSION);
    form.append("vName",        Constants.APPLICATION.VERSION_NAME);
    form.append("client_token", client_token);

    const response = await fetch("https://msign.dcinside.com/auth/mobile_app_verification", {
        credentials: "omit",
        headers: {
            "Accept": "application/json",
            "User-Agent": "okhttp",
        },
        referrer: "http://www.dcinside.com",
        body: form,
        method: "POST",
        mode: "cors"
    });

    const json = await response.json();

    return json.app_id;
}

async function getAppId(fcm_token: FCMTokenStruct) {
    const { app_id: app_id } = await browser.storage.local.get({
        app_id: {
            id: "",
            timestamp: 0,
        },
    }) as { app_id: AppIdStruct; };

    const date = await getDate();

    if (app_id.id === "" || app_id.timestamp < fcm_token.timestamp || app_id.timestamp < date.timestamp) {
        const value_token = await sha256(`dcArdchk_${date.date}`);

        app_id.id = await fetchAppId(value_token, fcm_token.token);
        app_id.timestamp = Date.now();

        await browser.storage.local.set({
            app_id: app_id,
        });
    }

    return app_id;
}

export { getAppId };