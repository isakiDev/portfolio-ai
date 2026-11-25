import type { NowPlayingResponse } from "@features/portfolio/types";

export interface NowPlayingAdapter {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  title: string;
}

export const nowPlayingAdapter = (
  data: NowPlayingResponse,
): NowPlayingAdapter => ({
  albumImageUrl: data.item.album.images[0].url,
  artist: data.item.artists.map((artist) => artist.name).join(", "),
  isPlaying: data.is_playing,
  title: data.item.name,
});
