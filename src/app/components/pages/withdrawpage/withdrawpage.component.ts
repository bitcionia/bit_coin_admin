import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-withdrawpage',
  templateUrl: './withdrawpage.component.html',
  styleUrls: ['./withdrawpage.component.scss']
})
export class WithdrawpageComponent implements OnInit {

  constructor(
    private router: Router

  ) { }
  ngOnInit(): void {
  }

  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
