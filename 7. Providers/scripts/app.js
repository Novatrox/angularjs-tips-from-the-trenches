angular.module("novatrox.ng", [])
    .service("messagingService", novatrox.MessagingService)
    .provider("spotifyService", novatrox.SpotifyServiceProvider)
    .directive("novatroxApp", novatrox.appDirective)
    .directive("novatroxDetails", novatrox.detailsDirective)
    .config(novatrox.appConfig);