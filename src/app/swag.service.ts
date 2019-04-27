import { Injectable } from '@angular/core';
import { SwagItem } from './swag-item'
import { SWAG } from './mock-swag'
import { Observable, of, from, Subscription } from 'rxjs';
import { every, map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { AngularFirestore, DocumentReference, QuerySnapshot, DocumentSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SwagService {
  items: SwagItem[];
  db: AngularFirestore
  constructor(private messageService:MessageService, db: AngularFirestore) { 
    // this.items = db.collection('items').valueChanges();
    this.db = db
  }

  // getSwag$(): Observable<SwagItem[]> {
  //   return this.db.collection("swagitems")
  //     .get()
  //     .pipe(map<DocumentSnapshot<any>, SwagItem[]>(ds, si))
  // }
  
  // getItem$(id:String):Observable<any> {
  //   this.messageService.add(`SwagService: fetched swag item with id ${id}`)
  //   // return of(SWAG.find(swagItem => swagItem.id === id))
  // }
  addItem$(swagItem:SwagItem):Observable<DocumentReference> {
    let id: String = null
    const { name, description } = swagItem
    return from(this.db.collection("swagitems").add({name: name, description: description}))
  }
}

/*
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
*/
