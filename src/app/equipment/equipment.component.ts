import { Component, OnInit } from '@angular/core';
import { Equipment } from '../equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: Equipment[] = [
       new Equipment('Duct Tape', 0.5),
       new Equipment('Space Camera', 20),
       new Equipment('Food', 150),
       new Equipment('Oxygen Tanks', 400),
       new Equipment('AE-35 Unit', 5),
       new Equipment('ISS Supplies', 800),
       new Equipment('Water', 250),
       new Equipment('Satellite', 1200),
       new Equipment('R2 Unit', 32)
   ];
   cargoHold: Equipment[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   nearMass: boolean = false;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(equip): boolean {
     this.cargoHold.push(equip);
     this.cargoMass += equip.mass;
     if (this.maximumAllowedMass - this.cargoMass < 200) {
       this.nearMass = true;
       return true
     }
     return false;
   }
   canAdd(item): boolean {
     let numOfItem = 0;
     for (let i = 0; i < this.cargoHold.length; i++) {
       if (this.cargoHold[i].name === item.name) {
         numOfItem++;
       }
     }
     if (this.cargoHold.length === this.maxItems || (this.cargoMass + item.mass) > this.maximumAllowedMass || numOfItem >= 2) {
       return true;
     }
     return false;
   }
   remItem(num): void {
    this.cargoMass -= this.cargoHold[num].mass;
    this.cargoHold.splice(num, 1);
   }
   emptyHold(): void {
     this.cargoHold = [];
     this.cargoMass = 0;
     this.nearMass = false;
   }
}
