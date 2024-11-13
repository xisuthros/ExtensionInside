// Put all the javascript code here, that you want to execute in background.

import { getAPI } from "./api";
import { voiceReple } from "./api/voice_reple";

interface Message {
    id: string;
    file: File;
}

browser.runtime.onMessage.addListener(
    async function onMessage(message: Message, sender, sendResponse) {
        const app_id = await getAPI();

        const reple = voiceReple(message.id, app_id, message.file);

        const text = await reple;

        return text;
    },
);
