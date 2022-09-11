import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-validat-form',
  templateUrl: './test-validat-form.component.html',
  styleUrls: ['./test-validat-form.component.scss']
})
export class TestValidatFormComponent implements OnInit {
  currentItem=""
  constructor() { }

  ngOnInit(): void {
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
    this.currentItem="Moete"
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
