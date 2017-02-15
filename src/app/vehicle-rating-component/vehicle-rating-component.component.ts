import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-vehicle-rating-component',
  templateUrl: './vehicle-rating-component.component.html'
})
export class VehicleRatingComponentComponent {

  items: FirebaseListObservable<any[]>;
  itemsArray: any[];

  constructor(private af: AngularFire) {
    this.items = af.database.list('/vehicles');

    this.items.subscribe((array: any[]) => {
      this.itemsArray = array;
    });
  }

  thumbsUp(index: number) {
    const value = this.af.database.object('/vehicles/' + index);
    const currentValue = Number(this.itemsArray[index].thumbsUp);
    value.update({ 'thumbsUp': currentValue + 1 })
  }

  thumbsDown(index: number) {
    const value = this.af.database.object('/vehicles/' + index);
    const currentValue = Number(this.itemsArray[index].thumbsDown);
    value.update({ 'thumbsDown': currentValue + 1 })
  }

}