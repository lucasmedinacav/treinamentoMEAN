import { Component } from '@angular/core';
import { Facebook, Google, LinkedIn } from 'ng2-cordova-oauth/core';
import { OauthBrowser } from 'ng2-cordova-oauth/platform/browser'


@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>', // templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'app';

    private oauth: OauthBrowser = new OauthBrowser();

    private facebookProvider: Facebook = new Facebook({
        clientId: "1742463926052449",
        appScope: ["email"],
        redirectUri: "http://localhost:4200/callback"
    });
    private googleProvider: Google = new Google({
        clientId: "985360581770-f9ooms1qdevdf1pjf27b6lkr32fbs6a0.apps.googleusercontent.com",
        appScope: ["email"],
        redirectUri: "http://localhost:4200/callback"
    });
    private linkedinProvider: LinkedIn = new LinkedIn({
        clientId: "77ogva4o62tfzo",
        appScope: ["email"],
        redirectUri: "http://localhost:4200/callback"
    });

    constructor() { }

    public facebook() {
    this.oauth.logInVia(this.facebookProvider).then(success => {
      console.log("RESULT: " + JSON.stringify(success));
    }, error => {
      console.log("ERROR: ", error);
    });
  }

  public google() {
    this.oauth.logInVia(this.googleProvider).then(success => {
      console.log("RESULT: " + JSON.stringify(success));      
    }, error => {
      console.log("ERROR: ", error);      
    });
  }

  public linkedin() {
    this.oauth.logInVia(this.linkedinProvider).then(success => {
      console.log("RESULT: " + JSON.stringify(success));      
    }, error => {
      console.log("ERROR: ", error);      
    });
  }

}
