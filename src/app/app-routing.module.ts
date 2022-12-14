
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './components/artist/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist/artist-list/artist-list.component';

const routes: Routes = [
  // { path: "", component: ArtistListComponent },
  { path: "srch/:id", component: ArtistListComponent },
  { path: "arts/:id", component: ArtistDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
