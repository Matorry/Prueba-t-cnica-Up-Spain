import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './error.page.component/error.page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorPageComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, ErrorPageComponent],
})
export class SharedModule {}
