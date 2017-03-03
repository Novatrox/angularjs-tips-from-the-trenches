angular.module("novatrox.ng", [])
    .service("messagingService", novatrox.MessagingService)
    .controller("appCtrl", novatrox.AppController)
    .controller("detailsCtrl", novatrox.DetailsController);