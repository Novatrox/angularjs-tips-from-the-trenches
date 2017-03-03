import { ISpotifyService, IArtistInfo } from './spotify.service';

export class SpotifySearchComponent {
    private _query: string;

    constructor(private spotifyService: ISpotifyService) {}

    $onInit() {
        console.log("SpotifySearchComponent initialized");
    }
    $onDestroy() {
        console.log("SpotifySearchComponent destroyed");
    }

    protected selectItem(item) {
        this.selectedItem = item;
    }

    private onQueryChanged(query) {
        delete this.items;

        if (query.length < 3) return;
        
        this.isLoading = true;
        this.spotifyService.searchArtists(query)
            .then(artists => {
                this.items = artists;
                this.isLoading = false;
            })
    }

    title: string;
    get query() {
        return this._query
    }
    set query(value: string) {
        this._query = value;
        this.onQueryChanged(value);
    }
    isLoading: boolean;
    items: IArtistInfo[];
    selectedItem: IArtistInfo;
}