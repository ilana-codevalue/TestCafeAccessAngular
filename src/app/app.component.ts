import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authenticationService';
import { AppTestHelperService } from './services/appTestHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  username: string = '';
  password: string = '';
 
  constructor(private authenticationService: AuthenticationService, 
    private appTestHelperService: AppTestHelperService) {
     }

  ngOnDestroy(): void {
    this.appTestHelperService.ngOnDestroy();
  }
  ngOnInit(): void {
    this.appTestHelperService.ngOnInit();
  }

  public logoutUser() : void {
    this.authenticationService.logout(this.username);
    console.log(`app clicked logout button`)
  }

  public loginUser() : void {
    this.authenticationService.login(this.username, this.password);
    console.log(`app clicked login button`)
  }
}
