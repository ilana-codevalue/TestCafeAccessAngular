import { Injectable, NgZone, OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";
import { AuthenticationService } from "./authenticationService";

@Injectable({
  providedIn: "root",
})
export class AppTestHelperService implements OnInit, OnDestroy {


  constructor (
    private ngZone: NgZone,
    private authenticationService: AuthenticationService,
    // private otherService: OtherService
  ) {
  }

  public ngOnDestroy(): void {
    window["appComponentRef"] = null;
  }

  public ngOnInit(): void {
    window["appComponentRef"] = {
      component: this, zone: this.ngZone,
      returnAuthenticationService: () => this.authenticationService
      // returnOtherService: () => this.otherService, 
    };
  }
}
