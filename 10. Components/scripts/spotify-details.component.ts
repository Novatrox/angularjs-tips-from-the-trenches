import { IArtistInfo } from './spotify.service';

export class SpotifyDetailsComponent {
    private _item: IArtistInfo;

    private onItemSelected(item: IArtistInfo) {
        if (!item) return;
        
        if (item.images && item.images.length > 0) {
            this.imageUrl = item.images[0].url;
        } else {
            this.imageUrl = null;
        }
    }

    get item() {
        return this._item;
    }
    set item(value: IArtistInfo) {
        this._item = value;
        this.onItemSelected(value)
    }
    imageUrl: string;
}