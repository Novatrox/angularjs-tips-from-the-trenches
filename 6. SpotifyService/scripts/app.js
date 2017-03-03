angular.module("novatrox.ng", [])
    .service("messagingService", novatrox.MessagingService)
    .service("spotifyService", novatrox.SpotifyService)
    .directive("novatroxApp", novatrox.AppDirective)
    .directive("novatroxDetails", novatrox.DetailsDirective);