import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwagItem } from '../swag-item';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-swag-detail',
  templateUrl: './swag-detail.component.html',
  styleUrls: ['./swag-detail.component.css']
})
export class SwagDetailComponent implements OnInit {
  private swagItemDoc: AngularFirestoreDocument<SwagItem>;
  swagItem: Observable<SwagItem>
  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {}
  ngOnInit() {
    this.getSwagItem()
  }
  getSwagItem() {
    const id = this.route.snapshot.paramMap.get('id')
    this.swagItemDoc = this.afs.doc<SwagItem>('swagitems/' + id);
    this.swagItem = this.swagItemDoc.valueChanges()
  }

}
