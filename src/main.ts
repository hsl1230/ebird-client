import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import AWSConfig from './aws-exports';
import DevAWSConfig from './aws-exports-dev';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';


if (environment.production) {
  Auth.configure(AWSConfig);
  Storage.configure(AWSConfig);
  enableProdMode();
} else {
  Auth.configure(DevAWSConfig);
  Storage.configure(DevAWSConfig);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
