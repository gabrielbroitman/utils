import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  private buscaPacienteWebapp: boolean = false;

  public appPacientes = [
    {
      title: 'Pacientes',
      //url: '/paciente/listagem',
      icon: 'list',
    }
  ]

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'Sobre',
      url: '/home',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuController: MenuController

  ) {
    this.initializeApp();
  }

  detectmob() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  defineMenu() {
    console.log('Mobile? :' + this.detectmob());
    //se for MOBILE, mudamos totalmente de componente. se não, manteremos no lugar da barra de menu.
    if (!this.detectmob()) {
      this.buscaPacienteWebapp = true;
      this.redefineMenu(true);
    } else {
      this.buscaPacienteWebapp = false;
      this.router.navigate(['/paciente/listagem']);
    }
  }

  fechaBuscaPaciente() {
    this.buscaPacienteWebapp = false;
    this.menuController.open()
    console.log("FOI!")

  }

  redefineMenu(event) {
    this.menuController.close();
  }


}
