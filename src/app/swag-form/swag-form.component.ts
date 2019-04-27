import { Component, OnInit } from '@angular/core'
import { SwagItemMock, SwagItem } from '../swag-item'
import { SwagService } from '../swag.service'
import { MessageService } from '../message.service'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-swag-form',
  templateUrl: './swag-form.component.html',
  styleUrls: ['./swag-form.component.css']
})
export class SwagFormComponent implements OnInit {
  swagItem:SwagItem = new SwagItemMock()

  constructor(private swagService:SwagService, private messageService:MessageService, db: AngularFirestore) { }

  ngOnInit() {

  }

  click() {
    this.swagService.addItem$(this.swagItem).subscribe(id => {
      this.messageService.add('created item with id ' + id)
      this.swagItem = new SwagItemMock()
    })
  }

}
