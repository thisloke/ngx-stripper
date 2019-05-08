import {
  Pipe, PipeTransform
} from '@angular/core';

@Pipe({ name: 'stripper' })
export class NgxStripperPipe implements PipeTransform {

  transform(inputString: string, type: 'html') {
    if(type === 'html' || !type) {
      const htmlEl = document.createElement("div");
      htmlEl.innerHTML = inputString;
      return htmlEl.textContent || htmlEl.innerText || "";
    }
  }
}
