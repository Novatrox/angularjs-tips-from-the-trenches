declare var postal: any;

export interface ISubscription {
    unsubscribe() : void;
}

export interface IMessagingService {
    subscribe(topic:string, callback:(data) => void): ISubscription;
    publish(topic:string, data:any)
}

export class MessagingService {
    subscribe(topic, callback) {
        return postal.subscribe({
            channel: "demo",
            topic: topic,
            callback: callback
        });
    }

    publish(topic, data) {
        postal.publish({
            channel: "demo",
            topic: topic,
            data: data
        });
    }
}