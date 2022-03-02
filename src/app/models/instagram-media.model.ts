export enum INSTAGRAM_MEDIA_TYPE {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    CAROUSEL_ALBUM = 'CAROUSEL_ALBUM'
}

export interface IInstagramMedia {
    caption: string;    // Texte de légende du média. Ne peut pas être renvoyé pour les médias d’albums.
    id: string; // ID du média.
    media_type: INSTAGRAM_MEDIA_TYPE;   // Type du média. La valeur peut être IMAGE, VIDEO ou CAROUSEL_ALBUM.
    media_url: string;  // URL du média.
    permalink: string;  // URL permanente du média. Ne sera pas précisée si le média contient du contenu protégé par des droits d'auteur ou a fait l'objet d'un signalement pour cause de violation des droits d'auteur.
    thumbnail_url?: string;  // URL de l’image miniature du média. Uniquement disponible sur le média VIDEO.
    timestamp?: Date;    // Date de publication du média au format ISO 8601.
    username?: string;   // Nom d’utilisateur du propriétaire du média.
}
