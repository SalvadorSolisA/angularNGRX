import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { itemsReducer } from './state/reducers/items-reducers';
import { ROOT_REDUCER } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './state/effects/items.effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot( ROOT_REDUCER ),//toma el valor que se exporto de AppState.ts
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ItemsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
