import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInstagramMedia, INSTAGRAM_MEDIA_TYPE } from 'src/app/models/instagram-media.model';

const tmp_example = [
	{
		caption: 'something happen',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'https://scontent.cdninstagram.com/v/t51.29350-15/274916176_482044603412787_7091291151398266612_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=-6ug5O5wrcYAX_dzkkP&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8yX1dz5NF245_AdKSPpe3EYeM_jnaimS_gsO5NORORJA&oe=62239C01',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'caption 2',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url: 'http://letakol.free.fr/fiboot/images/84f15d4c1b17042cf8b5e3975e195bec.png',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'oui',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/5d4424539de95cb888a908b36921e975.png',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'nom nom',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/b2b3d5ebca31939c1f478777787f08fe.png',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'chat',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/3aa756a65ac0f22505cba6c8198164b0.jpeg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/bf3b2f89b3b8cfb365cd653b536e9332.jpeg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat2',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/c13a1201f43556647656431fb2ad0553.jpeg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat3',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/157f5a4bc0d3c5f6def60116325cfe6a.jpeg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat4',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/ed52e80bf7bfdef210e021cbcc53bc37.jpeg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'rat5',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/4fc1e46794a913a1abf1f00091c5cd67.jpeg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
	{
		caption: 'surprise',
		id: '17985400504459172',
		media_type: INSTAGRAM_MEDIA_TYPE.IMAGE,
		media_url:
			'http://letakol.free.fr/fiboot/images/23ac74becbf9c692550e1ce9bd77e9dc.jpeg',
		permalink: 'https://www.instagram.com/p/Cak5BoxMFos/',
	},
];

@Injectable({
	providedIn: 'root',
})
export class InstagramService {
	constructor(private http: HttpClient) {}

	public getFeed(): Promise<IInstagramMedia[]> {
    // TMP
		return new Promise((resolve) => {
			setTimeout(() => resolve(tmp_example), 1500);
		});
	}
}
