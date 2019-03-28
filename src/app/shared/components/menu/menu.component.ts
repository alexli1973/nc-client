import { Component, OnInit } from '@angular/core';
import {MenuService} from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
