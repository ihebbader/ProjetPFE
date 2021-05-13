import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrismService} from '../../../shared/prism.service';
import {Components, FormioRefreshValue} from '@formio/angular';
import {EntityService} from '../../../shared/service/workflow/entity.service';
import components = Components.components;
import {DatamodelService} from '../../../shared/service/workflow/DataModel/datamodel.service';
import {Entity} from '../../../shared/Model/entity';
import {Properties} from '../../../shared/Model/properties';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {
  public json1;//= {"components":[{"id":7,"label":"Text Field","labelPosition":"top","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"textfield","input":true,"dataGridLabel":false,"inputType":"text"}]};;

  ngOnInit(): void {
    this.getDataModel();
  }

  public formtest;
  //  {"components":[{"id":7,"label":"Text Field","labelPosition":"top","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"textfield","input":true,"dataGridLabel":false,"inputType":"text"}]};
  @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  public form: Object;
  public formFromDataBase: Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  public refreshForm1: EventEmitter<FormioRefreshValue> = new EventEmitter();

  constructor(public prism: PrismService, private test: EntityService, private dataModel: DatamodelService) {
    this.form = {components: []};

  }

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    console.log(event);
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    this.refreshForm.emit({
      property: 'form',
      value: event.form
    });
    console.log(this.form);
    this.formFromDataBase = event.form.components;
  }

  submit() {

    this.test.saveProperty(this.formFromDataBase).subscribe(resp => {
    });
  }

  //tester
  bader = false;

  tester() {
    console.log(this.formFromDataBase);
    this.test.getAllProperty().subscribe(resp => {
      this.formFromDataBase = [resp[0], resp[1]];
      console.log(this.formFromDataBase);
      this.json1 = JSON.stringify(this.formFromDataBase);
      console.log(this.json1);
    });

  }

  ngAfterViewInit() {
    this.prism.init();
  }

  entity: Properties[] = null;
  ListProperty;
  e = {components: []};
  vue = false;
  //json11={"components":[{"idProp":4,"id":null,"label":"Nom","labelPosition":"left-left","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"textfield","input":true,"dataGridLabel":false,"inputType":"text"},{"idProp":6,"id":null,"label":"Submit","labelPosition":"top","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":null,"autofocus":false,"spellcheck":null,"disabled":false,"tableView":false,"modalEdit":false,"multiple":false,"persistent":false,"inputFormat":null,"encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"button","input":true,"dataGridLabel":true,"inputType":null},{"idProp":5,"id":null,"label":"Prenom","labelPosition":"top","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"textfield","input":true,"dataGridLabel":false,"inputType":"text"}]};
json11 :any ;
  getDataModel() {
    this.dataModel.getModelById(43).subscribe(resp => {

      //     let entities=resp.entity;
      this.ListProperty = resp;
      this.entity = this.ListProperty;
      this.ListProperty ? this.ListProperty : [];
      this.e.components = this.entity;
      //this.entity=resp;
      console.log(this.e);
     this.json11 =this.e;
      console.log(this.json11);
      this.vue = true;
      console.log(this.vue);
    });
  }
}
