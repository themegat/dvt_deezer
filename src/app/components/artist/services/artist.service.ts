import { ArtistSearchResult } from '../models/artist-search-result.model';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';
import { ArtistTopResult } from '../models/artist-top-result.model';
import { ArtistAlbumResult } from '../models/artist-album-result.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public search(artist: string): Observable<ArtistSearchResult> {
    const params = new HttpParams().set('q', artist);
    const url = `${environment.apiBaseUrl}/search/artist`;
    return this.httpClient.get<ArtistSearchResult>(url, { params });
  }

  public artist(id: number): Observable<Artist> {
    const url = `${environment.apiBaseUrl}/artist/${id}`;
    return this.httpClient.get<Artist>(url);
  }

  public artistTracks(id: number): Observable<ArtistTopResult> {
    const url = `${environment.apiBaseUrl}/artist/${id}/top`;
    return this.httpClient.get<ArtistTopResult>(url);
  }

  public artistAlbums(id: number): Observable<ArtistAlbumResult> {
    const url = `${environment.apiBaseUrl}/artist/${id}/albums`;
    return this.httpClient.get<ArtistAlbumResult>(url);
  }
}
