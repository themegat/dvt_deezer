import { Album } from "./album.model";

export interface ArtistAlbumResult {
  data: Album[];
  total: number;
  next: string;
}
