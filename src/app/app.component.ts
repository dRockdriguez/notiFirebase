import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { AjustesProvider } from '../providers/ajustes/ajustes';
import { FcmProvider } from '../providers/fcm/fcm';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private ajustes: AjustesProvider,
    fcm: FcmProvider,
    toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      this.ajustes.cargarStorage().then(() => {
        /*if (this.ajustes.ajustes.mostrartutorial) {
          this.rootPage = 'IntroPage';
        } else {
          this.rootPage = HomePage;
        }

        platform.pause.subscribe(() => {
          console.log('La aplicación se detendrá')
        });

        platform.resume.subscribe(() => {
          console.log('La aplicación continua');
        });*/

        fcm.getToken()

        // Listen to incoming messages
        fcm.listenToNotifications().pipe(
          tap(msg => {
            // show a toast
            const toast = toastCtrl.create({
              message: msg.body,
              duration: 3000
            });
            toast.present();
          })
        )
          .subscribe()
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });

    });
  }
}

