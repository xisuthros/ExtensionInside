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
    if (!(extension && mime_type)) {
        alert("ONLY M4A FILE IS ALLOWED");
        return null;
    }

    return file;
}

if (window.location.host === "gall.dcinside.com") {
    if (/\/(mgallery\/)?board\/write\/?/.test(window.location.pathname)) {
        const source = $("#tx_canvas_source");
        source.on("drop", event => {
            event.preventDefault();
            const file = readFileFromDropEvent(event);
            if (file === null) {
                return;
            }
            console.log(`filename: ${file?.name}`);
            let id = $("#id").val();
            browser.runtime.sendMessage({
                id: id,
                file: file,
            }).then((text) => {
                console.log(text);
                const target = $(event.delegateTarget);
                target.val(target.val() + text);
            });
        });
        source.on("dragover", event => event.preventDefault());

        const wysiwyg = $("#tx_canvas_wysiwyg").contents().find("html body.tx-content-container");
        wysiwyg.on("drop", event => {
            console.log("file dropped");
            event.preventDefault();
            const file = readFileFromDropEvent(event);
            if (file === null) {
                return;
            }
            console.log(`filename: ${file?.name}`);
            let id = $("#id").val();
            browser.runtime.sendMessage({
                id: id,
                file: file,
            }).then((text) => {
                console.log(text);
                $(event.delegateTarget).append("<br />" + text);
            });
        });
        wysiwyg.on("dragover", event => event.preventDefault());
    } else if (/\/(mgallery\/)?board\/view\/?/.test(window.location.pathname)) {
        const elements = $("div.cmt_write_box div.cmt_txt_cont div.cmt_write");
        elements.on("drop", event => {
            console.log("file dropped");
            event.preventDefault();
            const file = readFileFromDropEvent(event);
            if (file === null) {
                return;
            }
            console.log(`filename: ${file?.name}`);
            let id = $("#id").val();
            browser.runtime.sendMessage({
                id: id,
                file: file,
            }).then((text) => {
                console.log(text);
                $(event.delegateTarget).find("textarea").val(text);
            });
        });
        elements.on("dragover", event => event.preventDefault());
    }
}
