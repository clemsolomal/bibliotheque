import { Component } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'bibliotheque';

    constructor(){
      const firebaseConfig = {
        apiKey: "AIzaSyBIueQz3YU-KX4arBWObDQ7S1yzYI0QHUM",
        authDomain: "bibliotheque-e8021.firebaseapp.com",
        projectId: "bibliotheque-e8021",
        databaseURL: "https://bibliotheque-e8021-default-rtdb.firebaseio.com",
        storageBucket: "bibliotheque-e8021.appspot.com",
        messagingSenderId: "541424565410",
        appId: "1:541424565410:web:104c0c8fc2ec0e9cb86bfb",
        measurementId: "G-GVJ4EEXX3N"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
}
