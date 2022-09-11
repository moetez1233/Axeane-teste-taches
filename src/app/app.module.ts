import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { FirstTachComponent } from './first-tach/first-tach.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { TestValidatFormComponent } from './test-validat-form/test-validat-form.component';
import { PopupFactureComponent } from './popup-facture/popup-facture.component';

@NgModule({
  declarations: [
    AppComponent,
   
    
    FirstTachComponent,
    ListUsersComponent,
    TestValidatFormComponent,
    PopupFactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
