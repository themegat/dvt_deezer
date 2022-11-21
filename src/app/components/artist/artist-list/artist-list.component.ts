import { ActivatedRoute } from '@angular/router';
import { ArtistService } from './../services/artist.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  data = new BehaviorSubject<Artist[]>([]);

  constructor(private artistService: ArtistService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    var searchvalue = this.route.snapshot.paramMap.get('id');
    if (searchvalue) {
      this.artistService.search(searchvalue).subscribe((response) => {
        this.data.next(response.data);
      })
    }
  }
}
