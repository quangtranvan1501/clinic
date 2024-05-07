import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  switchValue = false;
  switchValue2 = false;
  switchValue3 = false;
  constructor(private router: Router) {}

  logOut(): void {
    this.router.navigate(['']);
  }
}
