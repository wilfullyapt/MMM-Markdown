var NodeHelper = require("node_helper");
const fs = require("fs");
const path = require("path")
const showdown = require("showdown");
const cheerio = require('cheerio');

module.exports = NodeHelper.create({
    // Subclass start method.
    start: function() {
        console.log("Started node_helper.js for MMM-Markdown.");
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'LOAD_MARKDOWN') {
            console.log("LOAD_MARKDOWN flag received.")
            this.readMarkdown(payload)
        }
    },

    readMarkdown: function(name) {
        filepath = path.join(this.path,"markdown",name)
        if (!fs.existsSync(filepath)) {
            console.log("Markdown file not found! " + filepath)
            return
        }
        console.log("Markdown filepath exists! " + filepath)
        showdown_options = {
            tasklists: 'true',
            tables: 'true',
            emoji: 'true',
        }
        converter = new showdown.Converter(showdown_options)
        fileread = fs.readFileSync(filepath, {encoding: 'utf-8'})
        html = converter.makeHtml(fileread);
        code = this.modifyHtmlSmartlike(html)
        this.sendSocketNotification('MARKDOWN_IN_HTML', code);
    },

    modifyHtmlSmartlike: function(html) {
        let $ = cheerio.load(html, null, false);

        taskItems = $('.task-list-item')

        taskItems.each(function (i, element) {
            if (element.firstChild.attribs.type == 'checkbox') {
                delete element.firstChild.attribs.disabled;
            }
        });

        return $.html()
    }
});