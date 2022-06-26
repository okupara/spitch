import React from "react"

type Props = {
  albumId: string
}

export const SpotifyPlayer = ({ albumId }: Props) => (
  <iframe
    style={{ borderRadius: "12px" }}
    src={`https://open.spotify.com/embed/album/${albumId}`}
    width="100%"
    height="80"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  ></iframe>
)
