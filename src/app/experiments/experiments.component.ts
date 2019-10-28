import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   selectedExp: string[] = [];
   constructor() { }

   ngOnInit() { }
   selExp(exp) {
    if (this.selectedExp.includes(exp)) {
      this.selectedExp.splice(this.selectedExp.indexOf(exp), 1);
    } else if (!this.selectedExp.includes(exp) && this.selectedExp.length < 3) {
        this.selectedExp.push(exp);
      }
   }
}
