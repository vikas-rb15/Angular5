import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',-- atribute selector  <div app-servers ></div>
  // selector: '.app-servers',-- class selector   <div class="app-servers"></div> other seudo selector are not supported
  selector: 'app-servers', //element selector
  //template: `<app-server></app-server>`, // inline htmltemplate -- this is used only if we have less then 3 lines of code
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = "Test Server";
  serverCreated: boolean = false;
  servers = ['test1', 'test2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }

  ngOnInit() {
  }
  createNewServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "New server created";
  }
  onUpdateServername(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
