import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hello Neil Christian';
  items : Observable<any[]>;
  isDisabled = false;
  x= "Default";
  imgLink = "../../assets/Angular.png";
  isShow = false;


  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.items = this.firestore.collection('Data').valueChanges();
  }

  click(text){
    this.x = `Click: ${text}`;
  }

  
}


