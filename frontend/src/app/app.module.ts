import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
