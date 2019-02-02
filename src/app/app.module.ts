import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { IonicStorageModule } from '@ionic/storage';
import { AjustesProvider } from '../providers/ajustes/ajustes';
import { AlertController } from 'ionic-angular';
import { FcmProvider } from '../providers/fcm/fcm';

import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebase = {
  apiKey: "AIzaSyBMFdcGBMq6qGNqTn4uyf2nnK1JQdczxuE",
  authDomain: "pruebapushnotifications-6feae.firebaseapp.com",
  databaseURL: "https://pruebapushnotifications-6feae.firebaseio.com",
  projectId: "pruebapushnotifications-6feae",
  storageBucket: "pruebapushnotifications-6feae.appspot.com",
  messagingSenderId: "30269611706"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pagina2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AjustesProvider,
    AlertController,
    Firebase,
    FcmProvider
  ]
})
export class AppModule { }
