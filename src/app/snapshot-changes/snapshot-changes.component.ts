import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwagItem, SwagItemId } from '../swag-item';

@Component({
  selector: 'app-snapshot-changes',
  templateUrl: './snapshot-changes.component.html',
  styleUrls: ['./snapshot-changes.component.css']
})
export class SnapshotChangesComponent implements OnInit {
  private swagItemCollection: AngularFirestoreCollection<SwagItem>;
  swagItems: Observable<SwagItemId[]>;
  constructor(private readonly afs: AngularFirestore) { 
    this.swagItemCollection = afs.collection<SwagItem>('swagitems');
    this.swagItems = this.swagItemCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id
        const data = a.payload.doc.data() as SwagItem
        return { id, ...data }
      }))
    )
  }

  ngOnInit() {
  }

}
