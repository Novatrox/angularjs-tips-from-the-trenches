import { IMessagingService } from './messaging.service';
import { ISpotifyService } from './spotify.service';

export class AppController {
    constructor(private messagingService: IMessagingService, private spotifyService: ISpotifyService) {}

    onQueryChanged(query) {
        delete this.items;

        if (query.length < 3) return;
        
        this.isLoading = true;
        this.spotifyService.searchArtists(query)
            .then(artists => {
                this.items = artists;
                this.isLoading = false;
            })
    }
    selectItem(item) {
        this.messagingService.publish("itemSelected", item);
    }

    title = "Spotify";
    isLoading: boolean;
    items: any[];
}