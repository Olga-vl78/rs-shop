import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../shared/shared.module';
import { BannersSliderComponent } from './components/banners-slider/banners-slider.component';
import { MainPageComponent } from './pages/main-page/main-page.component';





@NgModule({
  declarations: [
    BannersSliderComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule, SharedModule, CarouselModule, ButtonModule, ToastModule
  ],
  exports: [CommonModule, BannersSliderComponent, MainPageComponent]
})
export class MainModule { }
