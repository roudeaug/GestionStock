import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /* Fontawesome */
  faBars = faBars;

  /* Passage de paramètre du composant parent au fils*/
  @Input()
  showSideBar: boolean;

  /* Passage du paramètre du composant fils au parent */
  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  /* Modifier la valeur du booleen d'affichage */
  showHideSideBar() {
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }

}
