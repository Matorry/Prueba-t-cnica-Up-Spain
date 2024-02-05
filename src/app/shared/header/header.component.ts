import { Component } from '@angular/core';
import { MenuOption } from 'src/app/types/menuOptions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {}
  menuOptions: MenuOption[] = [
    { label: 'Cards', path: '/characters/cards' },
    { label: 'Table', path: '/characters/table' },
  ];
}
