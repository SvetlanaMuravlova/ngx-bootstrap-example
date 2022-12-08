import { Component } from '@angular/core';

@Component({
  selector: 'app-regular',
  template: `
    <accordion>
      <accordion-group heading="Static Header">
        This content is straight in the template.
      </accordion-group>
      <accordion-group heading="Another group">
        <p>Some content</p>
      </accordion-group>
      <accordion-group heading="Another group">
        <p>Some content</p>
      </accordion-group>
      <accordion-group heading="Another group">
        <p>Some content</p>
      </accordion-group>
    </accordion>
  `
})
export class RegularComponent {
  title = 'ngx-botstrap-angular-15';
}
