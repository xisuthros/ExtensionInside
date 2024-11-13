"use strict";

import { parse, stringify, parseNumberAndBigInt } from "lossless-json";

type CheckInStruct = {
    id:           number | BigInt;
    token:        number | BigInt;
    timestamp:    number | bigint;
    version_info: string;
}

async function fetchCheckIn(check_in: CheckInStruct) {
    const body = stringify({
        id: check_in.id,
        checkin: {
            last_checkin_msec: check_in.timestamp,
            type: 3,
        },
        security_token: check_in.token,
        version: 2,
    });

    const response = await fetch("https://device-provisioning.googleapis.com/checkin", {
        credentials: "omit",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "okhttp",
        },
        body: body,
        method: "POST",
        mode: "cors"
    });

    const json: any = parse(await response.text(), null, parseNumberAndBigInt);

    return {
        id:           json.android_id,
        token:        json.security_token,
        timestamp:    json.last_checkin_msec,
        version_info: json.version_info,
    } as CheckInStruct;
}

async function getCheckIn() {
    let { check_in: check_in } = await browser.storage.local.get({
        check_in: { id: 0, token: 0, timestamp: 0, version_info: "" },
    }) as { check_in: CheckInStruct; };

    if (Date.now() - Number(check_in.timestamp) > 24 * 60 * 60 * 1000) {
        check_in = await fetchCheckIn(check_in);

        await browser.storage.local.set({
            check_in: check_in,
        });
    }

    return check_in;
}

export { getCheckIn, CheckInStruct };