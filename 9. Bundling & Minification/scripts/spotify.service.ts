export interface IArtistInfo {
    name: string;
    images: IImage[];
}

export interface IImage {
    height?:number;
    width?:number;
    url: string;
}

export interface ISpotifyService {
    searchArtists(query:string) : ng.IPromise<IArtistInfo[]>;
}

export class SpotifyService {
    constructor(private $http: ng.IHttpService, private $q: ng.IQService, private $timeout: ng.ITimeoutService, private delay: number) { }

    searchArtists(query:string) : ng.IPromise<IArtistInfo[]> {
        return this.$q((resolve, reject) => {
            this.$timeout(() => {
                this.$http.get("https://api.spotify.com/v1/search?q=" + encodeURI(query) + "&type=artist")
                    .then((response) => {
                        resolve(response.data['artists'].items);
                    })
            }, this.delay);
        });
    }
}

export class SpotifyServiceProvider implements ng.IServiceProvider {
    private delay: number = 0;

    setDelay = function (ms) {
        this.delay = ms;
    }

    $get($http, $q, $timeout) {
        return new SpotifyService($http, $q, $timeout, this.delay);
    }
}