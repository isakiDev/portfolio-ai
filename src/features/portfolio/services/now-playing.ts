import type { InputAccessToken, NowPlayingResponse } from "../types";

const ENDPOINTS_URL = Object.freeze({
  NOW_PLAYING: "https://api.spotify.com/v1/me/player/currently-playing",
  GET_TOKEN: "https://accounts.spotify.com/api/token",
});

const getAccessToken = async ({
  clientId,
  clientSecret,
  refreshToken,
}: InputAccessToken) => {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const body = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };

  const encoded = new URLSearchParams(body).toString();

  const response = await fetch(ENDPOINTS_URL.GET_TOKEN, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encoded,
  });

  return response.json();
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

    const response = await fetch(ENDPOINTS_URL.NOW_PLAYING, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204) return null;
    if (!response.ok) throw new Error("Unable to fetch song");

    const data: NowPlayingResponse = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};
