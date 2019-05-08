import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgxStripperPipe} from './directives/ngx-stripper.pipe';

@NgModule({
    declarations: [
      NgxStripperPipe
    ],
    exports: [
      NgxStripperPipe
    ],
    imports: [
        CommonModule
    ]
})
export class NgxStripperModule {
    static forRoot() {
        return {
            ngModule: NgxStripperModule,
            providers: []
        };
    }
}
