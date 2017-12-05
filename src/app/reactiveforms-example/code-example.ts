export class Examples {
  htmltSimpFormMarkup = `
  <form [formGroup]="userForm">
    <div class="title-value-layout">
      <vgr-title-value title="Förnamn">
        <vgr-input formControlName="firstname" [isInvalid]="userForm.controls.firstname.invalid" 
        [errormessage]="'Du måste ange ett namn på minst 2 tecken'"></vgr-input>
      </vgr-title-value>
      <vgr-title-value title="Efternamn">
        <vgr-input formControlName="lastname" [isInvalid]="userForm.controls.lastname.invalid" 
        [errormessage]="'Du måste ange ett namn på minst 2 tecken'"></vgr-input>
      </vgr-title-value>
      <vgr-title-value title="Ålder">
        <vgr-input formControlName="age" [rightAlign]="true" [suffix]="'år'" [isInvalid]="userForm.controls.age.invalid" 
        [errormessage]="'Felaktig ålder'"></vgr-input>
      </vgr-title-value>
      <vgr-title-value title="E-post">
        <vgr-input formControlName="email" [isInvalid]="userForm.controls.email.invalid" 
        [errormessage]="'Ange en giltig e-postadress'"></vgr-input>
      </vgr-title-value>
    </div>
    <vgr-button [disabled]="userForm.invalid">Skapa användare</vgr-button>
  </form>`;

  typeScriptSimpleFormMarkup = `import { Component, OnInit } from '@angular/core';
  import { HtmlEncodeService } from '../html-encode.service';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  
  import { Examples } from './code-example';
  
  @Component({
      selector: 'app-reactiveformscodeexample',
      templateUrl: './reactiveforms-example.component.html',
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
  }`;
}

