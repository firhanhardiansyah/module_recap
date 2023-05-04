import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, NavbarComponent, HeroComponent],
  exports: [NavbarComponent, HeroComponent],
})
export class HomePageModule {}
