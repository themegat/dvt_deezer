import { ArtistTopResult } from './../models/artist-top-result.model';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album.model';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  artistId = 0;
  $artist: BehaviorSubject<Artist> | null = null;
  $topTracks: BehaviorSubject<ArtistTopResult> | null = null;
  $albums = new BehaviorSubject<Album[]>([]);

  constructor(private route: ActivatedRoute,
    private artistService: ArtistService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.artistId = parseInt(idParam);
    }

    this.artistService.artist(this.artistId).subscribe((response) => {
      this.$artist = new BehaviorSubject(response);
    });

    this.artistService.artistTracks(this.artistId).subscribe((response) => {
      if (response.data.length > 5) {
        response.data = response.data.slice(0, 5);
      }
      this.$topTracks = new BehaviorSubject(response);
    });

    this.artistService.artistAlbums(this.artistId).subscribe((response) => {
      this.$albums.next(response.data)
    });
  }

}
