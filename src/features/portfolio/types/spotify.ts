export interface InputAccessToken {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}

export interface NowPlayingResponse {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      images: { url: string }[];
    };
    artists: { name: string }[];
  };
}

export interface NowPlayingTrack {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  title: string;
}
