import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CORSTest';
  testMessage$: Observable<string>;

  constructor(private testService: TestService){

  }

  getResponse () {  
    this.testService.validatePAN().subscribe(data => console.log(data));  
}
}
