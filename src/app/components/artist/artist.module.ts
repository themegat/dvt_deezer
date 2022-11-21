import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { ArtistService } from './services/artist.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ArtistListComponent,
    ArtistDetailsComponent,
    ArtistCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    RouterModule
  ],
  providers: [
    ArtistService,
  ]
})
export class ArtistModule { }
