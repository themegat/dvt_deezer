import { Artist } from './artist.model';

export interface ArtistSearchResult {
  data: Artist[];
  total: number;
  next: string;
}
