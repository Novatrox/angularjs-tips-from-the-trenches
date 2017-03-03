import { IMessagingService, ISubscription } from './messaging.service';
import { IArtistInfo } from './spotify.service';

export class DetailsController {
    private subscription: ISubscription;

    constructor(messagingService: IMessagingService) {
        this.subscription = messagingService.subscribe("itemSelected", (item: IArtistInfo) => {
            this.hasDetails = true;
            this.name = item.name;

            if (item.images && item.images.length > 0) {
                this.imageUrl = item.images[0].url;
            } else {
                this.imageUrl = null;
            }
        })
    }
    onUnload() {
        this.subscription.unsubscribe();
    }

    hasDetails = true;
    name: string;
    imageUrl:string;
}