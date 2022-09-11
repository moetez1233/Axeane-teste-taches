import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-popup-facture',
  templateUrl: './popup-facture.component.html',
  styleUrls: ['./popup-facture.component.scss']
})
export class PopupFactureComponent implements OnInit {
@Input() item=""
  constructor() { }

  ngOnInit(): void {
  }

}
