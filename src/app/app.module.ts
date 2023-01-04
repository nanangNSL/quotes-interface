import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { TypistComponent } from './component/typist/typist.component';
import { BodyformComponent } from './component/bodyform/bodyform.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypistComponent,
    BodyformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
