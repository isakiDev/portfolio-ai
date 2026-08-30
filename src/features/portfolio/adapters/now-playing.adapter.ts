import type { NowPlayingResponse } from "@features/portfolio/types";

import Pause from "@components/icons/Pause.astro";
import Soundbar from "@components/icons/Soundbar.astro";

type AstroIcon = (props: { class?: string }) => unknown;

export interface NowPlayingAdapter {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  title: string;
  icon: AstroIcon;
}

export const nowPlayingAdapter = (
  data: NowPlayingResponse,
): NowPlayingAdapter => ({
  albumImageUrl: data.item.album.images[0].url,
  artist: data.item.artists.map((artist) => artist.name).join(", "),
  isPlaying: data.is_playing,
  title: data.item.name,
  icon: data.is_playing ? Soundbar : Pause,
});
