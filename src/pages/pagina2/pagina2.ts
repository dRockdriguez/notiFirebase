import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  pagina3() {
    this.navCtrl.push('page3')
  }

  /*---------------------------------------------------------*/
  /* CICLO DE VIDA */
  /*---------------------------------------------------------*/
  /* Cuando la página se ha cargado */
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  /* Cuando la página se va a hacer activa */
  ionViewWillEnter() {
    console.log('ionViewWillEnter');

  }

  /* Cuando la página es activa */
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  /* Cuando se va a abandonar la página */
  ionViewWillLeave() {
    console.log('ionViewWillLeave');

  }

  /* Cuando se ha terminado de abandonar la página */
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  /* Cuando la página se va a destruir */
  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

  /* Justo para ver si se puede entrar o no en una página. Es como un Guard */
  ionViewCanEnter() {
    console.log('ionViewCanEnter');

    /*
    let num = Math.round(Math.random() * 10);
    console.log(num);
    if (num  >= 3) {
      return true;
    } else {
      return false;
    }
    */
    return new Promise((resolve, reject) => {
      let confirmar = this.alertCtrl.create({
        title: '¿Seguro?',
        subTitle: '¿Está seguro que desea entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              resolve(false);
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              resolve(true);
            }
          }
        ]
      }).present();
    });
  }

  /* Para saber si la página se puede abandonar. Como un Guard al revés */
  ionViewCanLeave() {
    console.log('ionViewCanLeave');

    let loading = this.loadingCtrl.create({
      content: 'Espere, por favor',
      dismissOnPageChange: true
    }).present();
    
    console.log('Espere 2 segundos');
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });

    return promesa;
  }
}
