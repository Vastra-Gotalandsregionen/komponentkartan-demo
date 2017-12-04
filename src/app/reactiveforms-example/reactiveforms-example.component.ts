import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { Examples } from '/examples';

@Component({
    selector: 'app-reactiveformscodeexample',
    templateUrl: './reactiveforms-example.component.html',
})
export class ReactiveformsexampleComponent implements OnInit {
    userForm: FormGroup;
    //   typeScriptSimpleListMarkup: string;
    //   htmlSimpleListMarkup: string;
    //   examples: Examples = new Examples();

    constructor(htmlEncoder: HtmlEncodeService, private fb: FormBuilder) {
        //     this.typeScriptSimpleListMarkup =
        //       htmlEncoder.prepareHighlightedSection(this.examples.typeScriptSimpleListMarkup, 'typescript');
        //     this.htmlSimpleListMarkup =
        //       htmlEncoder.prepareHighlightedSection(this.examples.htmltSimpleListMarkup);
    }
    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.userForm = this.fb.group({
            firstname: ['', [Validators.required, Validators.minLength(2)]],
            lastname: ['', [Validators.required, Validators.minLength(2)]],
            age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
            email: ['', [Validators.required, Validators.email]]
        });
    }



}

