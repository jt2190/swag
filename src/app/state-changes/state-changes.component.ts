
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwagItem, SwagItemId } from '../swag-item'

@Component({
  selector: 'state-changes',
  templateUrl: './state-changes.component.html',
  styleUrls: ['./state-changes.component.css']
})
export class StateChangesComponent implements OnInit {
  private swagItemCollection: AngularFirestoreCollection<SwagItem>;
  swagItems: Observable<SwagItemId[]>;
  constructor(private readonly afs: AngularFirestore) { 
    this.swagItemCollection = afs.collection<SwagItem>('swagitems');
  }

  ngOnInit() {
    console.log('on init')
    this.getSwagItems()
  }

  getSwagItems() {
    // Returns an Observable of the most recent changes as a DocumentChangeAction[]
    this.swagItems = this.swagItemCollection.stateChanges(['added']).pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as SwagItem
        const id = a.payload.doc.id
        return { id, ...data}
      }))
    )    
  }

  

}
