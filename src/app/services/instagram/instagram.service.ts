import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInstagramMedia, INSTAGRAM_MEDIA_TYPE } from 'src/app/models/instagram-media.model';

const tmp_example = [
	{
		caption: 'something happen',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F013%2F564%2Fdoge.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'caption 2',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url: 'https://m.media-amazon.com/images/I/71HTNz6VqfL._SS500_.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'oui',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'https://www.cointribune.com/app/uploads/2021/09/doge-hikayesi-devam-ediyor-elon-musk-tweet-atti-dogecoin-yuzde-80-yukseldi-1-e1616049750159.jpg?nowebp',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'nom nom',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url: 'https://stormgain.com/sites/default/files/news/DOGE.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'chat',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url: 'https://itsocial.fr/wp-content/uploads/2018/01/dogecoin-logo.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO0v6Qz0Jx3AoWbcoh9GOk5vY-966PuYO1NTLcq077IneGy9Lm_lwGmuN4ospx_FBTWfw&usqp=CAU',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat2',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url: 'https://cdn.decrypt.co/wp-content/uploads/2021/08/dogecoin-dog-meme-coins-tokens-gID_4.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat3',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'https://s.yimg.com/uu/api/res/1.2/t.A2PxsesZoFMaddm4vjpQ--~B/aD00MDA7dz03Mjg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/investorplace_417/6185f321c691407cfed56e2f901ccc21',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat4',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url: 'https://g.foolcdn.com/editorial/images/655481/shiba-inu-dogecoin.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat5',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'https://cryptonewsbtc.org/wp-content/uploads/2022/02/shiba-inu-shib-dogecoin-doge-cryptocurrency-blockchain-invest-token-dog-getty.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'surprise',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'https://www.arover.net/wp-content/uploads/2021/12/Elon-Musk-Argues-Dogecoin-DOGE-Is-Ideal-For-Trading-Over.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'oui',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'https://ih1.redbubble.net/image.516095236.7032/flat,800x800,075,f.jpg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
];

@Injectable({
	providedIn: 'root',
})
export class InstagramService {
	private cachedData: IInstagramMedia[] | null = null;

	constructor(private http: HttpClient) {}

	private requestFeed(): Promise<IInstagramMedia[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.cachedData = tmp_example;
				resolve(tmp_example);
			}, 1500);
		});
	}

	public getFeed(): Promise<IInstagramMedia[]> {
		return this.cachedData ? Promise.resolve(this.cachedData) : this.requestFeed();
	}
}
