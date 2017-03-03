import { IArtistInfo } from './spotify.service';

export class SpotifyListComponent {
    protected selectItem(item: IArtistInfo) {
        this.onItemSelected({item: item});
    }
    
    items: IArtistInfo[];
    onItemSelected: ({item: IArtistInfo}) => void;
}