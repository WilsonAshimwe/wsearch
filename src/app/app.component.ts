import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, SearchBarComponent, PageListComponent],
})
export class AppComponent {
  pages: any[] = [];
  constructor(private wikipedia: WikipediaService) {}
  title = 'wsearch';
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => (this.pages = pages));
  }
}
