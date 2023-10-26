import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main', url: '/dashboard'
        },
        {
          title: 'Progressbar', url: '/dashboard/progress'
        },
        {
          title: 'Graphics', url: 'grafica1'
        },
      ]

    }
  ];

  constructor() { }
}
