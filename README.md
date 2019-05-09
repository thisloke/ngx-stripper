# ngx-stripper

Ngx stripper, an Angular pipe to clean up string from any languages construct


### Demo

https://next.plnkr.co/plunk/DGbwiDGvvMz8LBcg

### Installation

Install the library
```sh
$ npm install --save ngx-stripper
```

### Usage

Import it in your Angular2 project like a module

1) Declare it in your module
    ```sh
    import {NgxStripperModule} from "ngx-stripper";
    @NgModule({
      imports: [
        NgxStripperModule
      ]
    })

    ```

2) Use it in your components

    ```sh
   import {Component} from '@angular/core';

    @Component({
      selector: 'label',
      template: `<p>{{text | stripper:'html'}}<p>`
    })

    export class LabelComponent {}
    ```


### Development

Want to contribute? Great!
Simply, clone the repository!


License
----

MIT


**Lorenzo I.**

