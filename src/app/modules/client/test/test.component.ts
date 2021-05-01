import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrismService} from '../../../shared/prism.service';
import {Components, FormioRefreshValue} from '@formio/angular';
import {EntityService} from '../../../shared/service/workflow/entity.service';
import components = Components.components;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {
public json1//= {"components":[{"id":7,"label":"Text Field","labelPosition":"top","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"textfield","input":true,"dataGridLabel":false,"inputType":"text"}]};;

  ngOnInit(): void {
  }
 public formtest ;
  //  {"components":[{"id":7,"label":"Text Field","labelPosition":"top","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"textfield","input":true,"dataGridLabel":false,"inputType":"text"}]};
  @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  public form: Object;
  public formFromDataBase:Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  public refreshForm1: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(public prism: PrismService,private test:EntityService) {
    this.form = {components: [],builder:{layout:false,advanced :false}};

  }
  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    console.log(event);
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.refreshForm.emit({
      property: 'form',
      value: event.form
    });
    this.formFromDataBase=event.form.components


  }
  submit(){

    this.test.saveProperty(this.formFromDataBase).subscribe(resp=>{
    })
  }
  //tester
  bader= false;
  tester(){
    console.log(this.formFromDataBase)
    this.test.getAllProperty().subscribe(resp=>{
this.formFromDataBase=[resp[0],resp[1]];
console.log(this.formFromDataBase)
      this.json1=JSON.stringify(this.formFromDataBase);
      console.log(this.json1);
    })

  }
  ngAfterViewInit() {
    this.prism.init();
  }
}
