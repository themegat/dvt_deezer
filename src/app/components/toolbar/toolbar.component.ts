import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  searchTimeOut: any = null;

  constructor(private router: Router) {
  }
  textChanged(event: any): void {
    this.searchForArtist(event.target['value']);
  }

  searchForArtist(artist: string): void {
    if (this.searchTimeOut && this.searchTimeOut !== null) {
      clearTimeout(this.searchTimeOut);
    }
    this.searchTimeOut = setTimeout(() => {
      this.router.navigate(['srch', artist])
    }, 2000);
  }
}
