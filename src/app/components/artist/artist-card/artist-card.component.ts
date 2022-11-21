import { Component, Input } from '@angular/core';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent {
  @Input() artist: Artist | any;

  get numberOfFans(): string {
    let fanCount = parseInt(this.artist.nb_fan);
    if (fanCount > 1000000) {
      return `${(fanCount / 1000000).toFixed(0)}M`;
    }
    return fanCount > 1000 ? `${(fanCount / 1000).toFixed(0)}K` : `${fanCount}`;
  }
}
