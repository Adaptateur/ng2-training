import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <h2>Hello {{name | uppercase}}</h2>
    </div>
  `
})
export class HelloComponent {

  @Input()
  name : string;

  constructor() {
    this.name = 'Safari Class';
  }

}
