// Put all the javascript code here, that you want to execute after page load.

import $, { data } from "jquery";

interface Message {
    id: string;
    file: File;
}

function readFileFromDropEvent(event: JQuery.DropEvent) {
    const data_transfer = event.originalEvent?.dataTransfer;
    if (!data_transfer) {
        return;
    }

    let file: File | null = null;

    if (data_transfer.items) {
        if (data_transfer.items.length == 1) {
            file = data_transfer.items[0].getAsFile();
        }
    } else {
        if (data_transfer.files.length == 1) {
            file = data_transfer.files[0];
        }
    }

    if (file === null) {
        alert("ONLY SINGLE FILE IS ALLOWED");
        return null;
    }

    const extension = file.name.endsWith(".m4a");
    const mime_type = [ "audio/m4a", "audio/mp4" ].includes(file.type);
    if (!extension || !mime_type) {
        alert("ONLY M4A FILE IS ALLOWED");
        return null;
    }

    return file;
}

if (window.location.host === "gall.dcinside.com") {
    if (/^\/((mgallery|mini|person)\/)?board\/(write|modify)\/?/.test(window.location.pathname)) {
        const source = $("#tx_canvas_source");
        source.on("drop", event => {
            event.preventDefault();

            const file = readFileFromDropEvent(event);
            if (file === null) return;
            console.log(`filename: ${file?.name}`);

            let id   = $(window).prop("gall_id") ?? $("#gallery_id").val() ?? $("#id").val();
            let type = $(window).prop("_GALLERY_TYPE_") ?? $("#_GALLTYPE_").val();
            if (type === "MI") id = `mi$${id}`;
            if (type === "PR") id = `pr$${id}`;

            const payload = { id, file } as Message;
            browser.runtime.sendMessage(payload).then((html) => {
                console.log(html);
                $(event.delegateTarget).val((_, value) => value + "<br />" + html + "<br />");
            });
        });
        source.on("dragover", event => {
            event.preventDefault();
        });

        const wysiwyg = $("#tx_canvas_wysiwyg").contents().find("html body.tx-content-container");
        wysiwyg.on("drop", event => {
            event.preventDefault();

            const file = readFileFromDropEvent(event);
            if (file === null) return;
            console.log(`filename: ${file?.name}`);

            let id   = $(window).prop("gall_id") ?? $("#gallery_id").val() ?? $("#id").val();
            let type = $(window).prop("_GALLERY_TYPE_") ?? $("#_GALLTYPE_").val();
            if (type === "MI") id = `mi$${id}`;
            if (type === "PR") id = `pr$${id}`;

            const payload = { id, file } as Message;
            browser.runtime.sendMessage(payload).then((html) => {
                console.log(html);
                $(event.delegateTarget).append("<br />" + html + "<br />");
            });
        });
        wysiwyg.on("dragover", event => {
            event.preventDefault();
        });
    } else if (/^\/((mgallery|mini|person)\/)?board\/view\/?/.test(window.location.pathname)) {
        const comment = $(".view_comment");
        comment.on("drop", "div.cmt_write", event => {
            event.preventDefault();

            const file = readFileFromDropEvent(event);
            if (file === null) return;
            console.log(`filename: ${file?.name}`);

            let id   = $(window).prop("gall_id") ?? $("#gallery_id").val() ?? $("#id").val();
            let type = $(window).prop("_GALLERY_TYPE_") ?? $("#_GALLTYPE_").val();
            if (type === "MI") id = `mi$${id}`;
            if (type === "PR") id = `pr$${id}`;

            const payload = { id, file } as Message;
            browser.runtime.sendMessage(payload).then((html) => {
                console.log(html);
                $(event.delegateTarget).find("textarea").val(html);
            });
        });
        comment.on("dragover", "div.cmt_write", event => {
            event.preventDefault();
        });
    }
}
