angular.module("novatrox.ng", [])
    .service("messagingService", novatrox.MessagingService)
    .directive("novatroxApp", novatrox.appDirective)
    .directive("novatroxDetails", novatrox.detailsDirective);