import type { NowPlayingResponse } from "@features/portfolio/types";

import Pause from "@components/icons/Pause.astro";
import Soundbar from "@components/icons/Soundbar.astro";

type AstroComponent = (props: Record<string, any>) => any;
type PlayingState = "playing" | "paused";

export interface NowPlayingAdapter {
  albumImageUrl: string;
  artist: string;
  artistUrl: string;
  isPlaying: boolean;
  songUrl: string;
  timePlayed: number;
  timeTotal: number;
  title: string;
  playingState: PlayingState;
  icon: AstroComponent;
}

export const nowPlayingAdapter = (
  data: NowPlayingResponse,
): NowPlayingAdapter => ({
  albumImageUrl: data.item.album.images[0].url,
  artist: data.item.artists.map((artist) => artist.name).join(", "),
  artistUrl: data.item.album.artists[0].external_urls.spotify,
  isPlaying: data.is_playing,
  songUrl: data.item.external_urls.spotify,
  timePlayed: data.progress_ms,
  timeTotal: data.item.duration_ms,
  title: data.item.name,
  playingState: data.is_playing ? "playing" : "paused",
  icon: data.is_playing ? Soundbar : Pause,
});
