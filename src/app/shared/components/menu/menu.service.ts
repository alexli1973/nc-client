import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'home'
  },
  {
    state: 'user',
    name: 'ACCOUNT',
    type: 'sub',
    icon: 'face',
    badge: [{ type: 'red', value: '3' }],
    children: [
      { state: 'my-account', name: 'PROFILE' },
      { state: 'supervisor', name: 'SUPERVISOR' },
      { state: 'orders', name: 'ORDERS' }
    ]
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
