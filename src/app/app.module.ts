import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule, UIView } from '@uirouter/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: [
        {
          name: 'app',
          url: '/',
          component: AppComponent,
        },
      ],
    }),
  ],
  providers: [],
  bootstrap: [UIView]
})
export class AppModule { }
