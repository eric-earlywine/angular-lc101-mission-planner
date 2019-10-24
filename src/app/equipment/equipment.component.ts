import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment = ['Habitat dome', 'Drones','Food containers','Oxygen tanks'];
  equipBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }
  add(equip: string) {
    if (!this.equipment.includes(equip)) {
      this.equipment.push(equip);
    }
  }
  remove(equip: string) {
    let index = this.equipment.indexOf(equip);
    this.equipment.splice(index, 1);
  }
  edit(equip: string) {
    this.equipBeingEdited = equip;
 }
 save(name: string, equip: string) {
  let index = this.equipment.indexOf(equip);
  this.equipment[index] = name;
  this.equipBeingEdited = null;
}
}
