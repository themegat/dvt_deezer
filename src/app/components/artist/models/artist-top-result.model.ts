import { Album } from './album.model';
import { Artist } from './artist.model';
import { Contributor } from './contributor.model';

interface Datum {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  contributors: Contributor[];
  md5_image: string;
  artist: Artist;
  album: Album;
  type: string;
}

export interface ArtistTopResult {
  data: Datum[];
  total: number;
  next: string;
}
