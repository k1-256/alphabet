import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ExampleWordComponent } from './example-word/example-word.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengeComponent,
    ExampleWordComponent,
    AlphabetComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
