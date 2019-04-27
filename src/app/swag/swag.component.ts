import { Component, OnInit } from '@angular/core';
import { SwagItem } from '../swag-item';
import { SwagService } from '../swag.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-swag',
  templateUrl: './swag.component.html',
  styleUrls: ['./swag.component.css']
})
export class SwagComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<SwagItem>;
  swag: Observable<SwagItem[]>
  selectedSwagItem: SwagItem = null

  constructor(private swagService: SwagService, db: AngularFirestore) { 
    this.itemsCollection = db.collection<SwagItem>('swagitems');
    this.swag = this.itemsCollection.valueChanges();
  }

  getSwag() {
    return this.swag;
  }

  ngOnInit() {
    
  }

}