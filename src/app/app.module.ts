import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    //* Custom modules
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
