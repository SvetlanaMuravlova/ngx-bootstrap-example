import { Component } from '@angular/core';
import { AccordionModule } from "ngx-bootstrap/accordion";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  imports: [AccordionModule, BrowserAnimationsModule],
  selector: 'app-standalone',
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
export class StandaloneComponent {}
