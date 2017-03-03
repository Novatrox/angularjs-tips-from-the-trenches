System.register(["postal"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var postal, MessagingService;
    return {
        setters: [
            function (postal_1) {
                postal = postal_1;
            }
        ],
        execute: function () {
            MessagingService = (function () {
                function MessagingService() {
                }
                MessagingService.prototype.subscribe = function (topic, callback) {
                    return postal.subscribe({
                        channel: "demo",
                        topic: topic,
                        callback: callback
                    });
                };
                MessagingService.prototype.publish = function (topic, data) {
                    postal.publish({
                        channel: "demo",
                        topic: topic,
                        data: data
                    });
                };
                return MessagingService;
            }());
            exports_1("MessagingService", MessagingService);
        }
    };
});
//# sourceMappingURL=messaging.service.js.map