import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
  term = '';
  @Output() submitted = new EventEmitter<string>();
  OnInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }
}
