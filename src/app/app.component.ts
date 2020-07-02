import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'GestionStock';
  showSideBar: boolean = false;

  onShowSideBarChange(showSideBar: boolean) {
    this.showSideBar = showSideBar;
  }
}
