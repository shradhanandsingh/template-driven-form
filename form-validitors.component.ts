import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-form-validitors',
  templateUrl: './form-validitors.component.html',
  styleUrls: ['./form-validitors.component.scss']
})
export class FormValiditorsComponent implements OnInit {
  model: any = {};

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    this.location.back();
  }
  onSubmit() {
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

}
