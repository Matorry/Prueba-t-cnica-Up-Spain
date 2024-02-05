import { Component, Input } from '@angular/core';
import { MenuOption } from 'src/app/types/menuOptions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor() {}
  @Input() options!: MenuOption[];
}
