import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';



// Enable production mode
enableProdMode();

// Bootstrap the application module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


