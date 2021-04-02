import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent implements OnInit {
  ckeConfig: any;

  public Editor = ClassicEditor;
  constructor() {
  }

  ngOnInit(): void {
  }

}
