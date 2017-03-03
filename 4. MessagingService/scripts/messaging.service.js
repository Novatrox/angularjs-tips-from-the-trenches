var novatrox;
(function(ns) {
    ns.MessagingService = function() {
        this.subscribe = function(topic, callback) {
            return postal.subscribe({
                channel: "demo",
                topic: topic,
                callback: callback
            });
        }

        this.publish = function(topic, data) {
            postal.publish({
                channel: "demo",
                topic: topic,
                data: data
            });
        }
    }
})(novatrox || (novatrox = {}));