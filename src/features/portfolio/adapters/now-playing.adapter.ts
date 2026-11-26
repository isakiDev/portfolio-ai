import type {
  NowPlayingResponse,
  NowPlayingTrack,
} from "@/features/portfolio/types/spotify";

export type { NowPlayingTrack } from "@/features/portfolio/types/spotify";
/** @deprecated Use NowPlayingTrack */
export type NowPlayingAdapter = NowPlayingTrack;

export const nowPlayingAdapter = (
  data: NowPlayingResponse,
): NowPlayingTrack => ({
  albumImageUrl: data.item.album.images[0]?.url ?? "",
  artist: data.item.artists.map((artist) => artist.name).join(", "),
  isPlaying: data.is_playing,
  title: data.item.name,
});
