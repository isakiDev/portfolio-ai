import type {
  InputAccessToken,
  NowPlayingResponse,
} from "../types/spotify";

const ENDPOINTS_URL = {
  NOW_PLAYING: "https://api.spotify.com/v1/me/player/currently-playing",
  GET_TOKEN: "https://accounts.spotify.com/api/token",
} as const;

interface AccessTokenResponse {
  access_token?: string;
}

const getAccessToken = async ({
  clientId,
  clientSecret,
  refreshToken,
}: InputAccessToken): Promise<AccessTokenResponse> => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const response = await fetch(ENDPOINTS_URL.GET_TOKEN, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    return {};
  }

  return (await response.json()) as AccessTokenResponse;
};

export const getNowPlaying = async ({
  clientId,
  clientSecret,
  refreshToken,
}: InputAccessToken): Promise<NowPlayingResponse | null> => {
  try {
    const { access_token } = await getAccessToken({
      clientId,
      clientSecret,
      refreshToken,
    });

    if (!access_token) return null;

    const response = await fetch(ENDPOINTS_URL.NOW_PLAYING, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204) return null;
    if (!response.ok) return null;

    return (await response.json()) as NowPlayingResponse;
  } catch {
    return null;
  }
};
