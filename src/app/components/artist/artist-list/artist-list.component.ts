import { ArtistService } from './../services/artist.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent {
  searchTimeOut: any = null;
  data = new BehaviorSubject<Artist[]>([]);

  constructor(private artistService: ArtistService) { }

  searchForArtist(artist: string): void {
    if (this.searchTimeOut && this.searchTimeOut !== null) {
      clearTimeout(this.searchTimeOut);
    }
    this.searchTimeOut = setTimeout(() => {
      this.artistService.search(artist).subscribe((response) => {
        this.data.next(response.data);
      })
    }, 2000);
  }

  getLink(artist: Artist): string {
    return `/artist/${artist.id}`;
  }
}
