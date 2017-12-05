import { Component, OnInit } from '@angular/core';
import { HtmlEncodeService } from '../html-encode.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Examples } from './code-example';

@Component({
    selector: 'app-reactiveformscodeexample',
    templateUrl: './reactiveforms-example.component.html',
    styleUrls: ['./reactiveforms-example.component.scss']
})
export class ReactiveformsexampleComponent implements OnInit {
    userForm: FormGroup;
    typeScriptSimpleListMarkup: string;
    htmlSimpleListMarkup: string;
    examples: Examples = new Examples();

    constructor(htmlEncoder: HtmlEncodeService, private fb: FormBuilder) {
        this.typeScriptSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.typeScriptSimpleFormMarkup, 'typescript');
        this.htmlSimpleListMarkup =
            htmlEncoder.prepareHighlightedSection(this.examples.htmltSimpFormMarkup);
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

