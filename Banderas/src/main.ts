import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
  
  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withFetch()), // Provee HttpClient
      
    ]
  })
    .catch(err => console.error(err));
  