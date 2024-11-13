"use strict";

import { getAppId } from "./api/app";
import { getCheckIn } from "./api/check_in";
import { getInstallations } from "./api/installations";
import { getFCMToken } from "./api/fcm_token";

async function getAPI() {
    const check_in = await getCheckIn();
    const installations = await getInstallations();
    const fcm_token = await getFCMToken(check_in, installations);

    if (fcm_token.token === "") {
        return "";
    }

    const app_id = await getAppId(fcm_token);
    return app_id.id;
}

export { getAPI };