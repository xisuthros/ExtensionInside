"use strict";

async function voiceReple(gall_id: string, app_id: string, file: File) {
    const form = new FormData();
    
    form.append("gall_id", gall_id);
    form.append("upfile", file.slice(0, file.size, "audio/m4a"), file.name);
    form.append("name", "ㅇㅇ");
    form.append("app_id", app_id);
    form.append("down_chk", "1");
    
    const response = await fetch("https://upload.dcinside.com/_app_vr_board.php", {
        credentials: "omit",
        headers: {
            "Accept": "application/json",
            "User-Agent": "dcinside.app",
        },
        body: form,
        referrer: "http://www.dcinside.com",
        method: "POST",
        mode: "cors"
    });

    const json = await response.json();

    return json[0].cause;
}

export { voiceReple };