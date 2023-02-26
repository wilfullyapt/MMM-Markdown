Module.register("MMM-Markdown", {
    defaults: {
        //      Minutes * seconds * milliseconds (don't change milliseconds)
        updateInterval: 15 * 60 * 1000 ,
        markdownFilename: "../README.md"
    },
    start: function() {
        Log.info("Starting module: " + this.name);
        this.html = "Starting ..."

        // Do this once first to load the data from the node_helper script
        this.sendSocketNotification('LOAD_MARKDOWN', this.config.markdownFilename);

    },
    getStyles() {
        return [
            this.file('MMM-Markdown.css')
        ]
    },
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = this.html;
        return wrapper;
    },
    notificationReceived(notification, payload, sender) {
        if (notification === 'MODULE_DOM_CREATED') {
            setInterval(() => {
                this.sendSocketNotification('LOAD_MARKDOWN', this.config.markdownFilename)
            }, this.config.updateInterval);
        }
    },
    socketNotificationReceived: function(notification, payload) {
        Log.log("Socket received from Node Helper");
        if(notification === "MARKDOWN_IN_HTML"){
            this.html = payload;
            this.updateDom();
        }
    }
});