import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() placeholder: string = 'Input text';
  @Output() search = new EventEmitter <string>();

  userSearchInput!: string;

  sendSearch(): void {
      this.search.emit(this.userSearchInput || '')
  }

}

