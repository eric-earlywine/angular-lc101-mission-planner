import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments = ['Mars soil sample','Plant growth in habitat','Human bone density'];
  expBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }
  add(exp: string) {
    if (!this.experiments.includes(exp)) {
      this.experiments.push(exp);
    }
  }
  remove(exp: string) {
    let index = this.experiments.indexOf(exp);
    this.experiments.splice(index, 1);
  }
  edit(exp: string) {
    this.expBeingEdited = exp;
  }
  save(name: string, exp: string) {
    let index = this.experiments.indexOf(exp);
    this.experiments[index] = name;
    this.expBeingEdited = null;
  }
}