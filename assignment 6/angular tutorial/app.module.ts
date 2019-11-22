import { BrowserModule } from '@angular/platform-browser';
import { NgModile } from '@angular/core';
import { HelloWorldComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HelloWorldComponent ],
  bootstrap: [ HelloWorldComponent ],
})
export class AppModule {}
