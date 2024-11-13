"use strict";

import { initializeApp as firebaseInitializeApp } from "firebase/app";
import { getInstallations as firebaseGetInstallations, getId, getToken, onIdChange,  } from "firebase/installations";
import Constants from "./const";

const options = {
    apiKey:            Constants.FIREBASE.API_KEY,
    authDomain:        Constants.FIREBASE.AUTH_DOMAIN,
    databaseURL:       Constants.FIREBASE.DATABASE_URL,
    projectId:         Constants.FIREBASE.PROJECT_ID,
    storageBucket:     Constants.FIREBASE.STORAGE_BUCKET,
    messagingSenderId: Constants.FIREBASE.MESSAGING_SENDER_ID,
    appId:             Constants.FIREBASE.APP_ID
};

window.Headers = new Proxy(window.Headers, {
    construct(target, argumentsList, newTarget) {
        const headers = Reflect.construct(target, argumentsList, newTarget);
        headers.append("User-Agent", "okhttp");
        return headers;
    },
});

const firebaseApp           = firebaseInitializeApp(options);
const firebaseInstallations = firebaseGetInstallations(firebaseApp);

type InstallationsStruct = {
    id:        string;
    token:     string;
    timestamp: number;
}

async function getInstallations() {
    const { installations: installations } = await browser.storage.local.get({
        installations: {
            id: "",
            token: "",
            timestamp: 0,
        },
    }) as { installations: InstallationsStruct; };

    const id = await getId(firebaseInstallations);
    const token = await getToken(firebaseInstallations);

    if (!(installations.id === id && installations.token === token)) {
        installations.id = id;
        installations.token = token;
        installations.timestamp = Date.now();

        await browser.storage.local.set({
            installations: installations,
        });
    }

    return installations;
}

export { getInstallations, InstallationsStruct };