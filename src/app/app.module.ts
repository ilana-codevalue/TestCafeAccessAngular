import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authenticationService';
import { AppTestHelperService } from './services/appTestHelper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: AuthenticationService, useClass: AuthenticationService},
    {provide: AppTestHelperService, useClass: AppTestHelperService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
