import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-attribute-directive';
  color = '';
  defaultColor = 'violet';
  warningMessage = '';
  condition = false;
  setWarningMessage() {
    this.color === ''
      ? (this.warningMessage = `Choose your highlight color fool! ${this.defaultColor} doesn't count`)
      : (this.warningMessage = '');
  }
}
