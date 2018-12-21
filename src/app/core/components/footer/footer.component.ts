import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  @Input() buttons: any;
  @Input() enableCloseButton: Boolean = true;
  constructor() { }


}
