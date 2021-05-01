import {Component, OnInit, ViewChild, TemplateRef, ElementRef, EventEmitter} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";
import {DatamodelService} from '../../../../shared/service/workflow/DataModel/datamodel.service';
import {DataModel} from '../../../../shared/Model/data-model';
import {FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {UserService} from '../../../../shared/service/users/user.service';
import {User} from '../../../../shared/Model/user';
import {Components, FormioRefreshValue} from '@formio/angular';
import {PrismService} from '../../../../shared/prism.service';
import {EntityService} from '../../../../shared/service/workflow/entity.service';
import {Entity} from '../../../../shared/Model/entity';



export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;

};

@Component({
  selector: 'app-pr-taskboard',
  templateUrl: './pr-taskboard.component.html',
  styleUrls: ['./pr-taskboard.component.scss']
})
export class PrTaskboardComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  workflowList:DataModel[] | null=null;

  drop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  dpgridTab: boolean;
  dplistTab: boolean = true;
  isCollapsed = false;
  isCollapsed1 = false;
  isCollapsed2 = false;
  cardremove3: boolean = true;
  cardremove2: boolean = true;
  cardremove1: boolean = true;
  isFull1: boolean;
  isFull2: boolean;
  isFull3: boolean;
  user:User[] | null=null;
  modalRef: BsModalRef;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public formtest ;
  //  {"components":[{"id":7,"label":"Text Field","labelPosition":"top","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"textfield","input":true,"dataGridLabel":false,"inputType":"text"}]};
  @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  public form: Object;
  public formFromDataBase:Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  public refreshForm1: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(public prism: PrismService,private test:EntityService,private modalService: BsModalService, private dataModelService: DatamodelService,private fb:FormBuilder,private DataModelService:DatamodelService,private userService:UserService) {
    this.form = {components: [],builder:{layout:false,advanced :false}};

    this.editForm=this.fb.group({
      dataModelName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      dataModelDescrip:['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
      start:['',Validators.required],
      end:['',Validators.required]
    })
    this.editFormUpdate=this.fb.group({
      dataModelName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      dataModelDescrip:['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
      start:['',Validators.required],
      end:['',Validators.required]
    })
    this.chartOptions = {
      series: [70],
      chart: {
        height: 150,
        type: "radialBar",
      },

      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["REVENUE"]
    };
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
  ngOnInit(): void {
   // this.prism.init();
    this.getDataModel();
    this.getUserList();
    console.log(this.user);

    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    console.log(this.dropdownList);
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  ListUsers;
getUserList(){
  this.userService.getAllusers().subscribe(resp=>{
   this.ListUsers=resp;

    this.user=this.ListUsers; this.ListUsers ? this.ListUsers : [];
  })
}
  CardRemoveTrans(number) {

    if (number == 1) {
      this.cardremove1 = false;
    }
    else if (number == 2) {
      this.cardremove2 = false;
    }
    else if (number == 3) {
      this.cardremove3 = false;
    }
  }
  onTab(number) {
    this.dplistTab = false;
    this.dpgridTab = false;
    if (number == '1') {
      this.dplistTab = true;
      this.Details=false;
    }
    else if (number == '2') {
      this.dpgridTab = true;
    }

  }
  tab1: boolean = true;
  tab2: boolean;
  tab3:boolean;
  tab4:boolean;
  tab1inter=true;
  tab2inter=false;
  etapeGenerame=true;
  onTab1(number) {
    this.tab1=true;
    this.tab2=false;
    this.tab3=false;
    this.tab4=false;
    if (number == '1') {
      this.tab1inter=true;
      this.tab1=true;
      this.etapeGenerame=true;
      this.tab2inter=false;
    }
    else if (number == '2') {
      this.tab1inter=false;
      this.tab1=false;
      this.tab2=true;
      this.tab3=false;
      this.tab2inter=true;

    }  else if (number == '3') {
      this.tab1inter=false;
      this.tab1=false;
      this.tab2=false;
      this.tab3=true;
      this.tab2inter=false;
      this.checkedUSER=false;
    }
    else if (number == '3') {
      this.tab1inter=false;
      this.tab1=false;
      this.tab2=false;
      this.tab3=false;
      this.tab4=false;
      this.tab2inter=false;

    }

    }


  fullScreenSection(number) {
    if (number == 1) {
      if (this.isFull1) {
        this.isFull1 = false;
      }
      else {
        this.isFull1 = true;
      }
    }
    if (number == 2) {
      if (this.isFull2) {
        this.isFull2 = false;
      }
      else {
        this.isFull2 = true;
      }
    }
    if (number == 3) {
      if (this.isFull3) {
        this.isFull3 = false;
      }
      else {
        this.isFull3 = true;
      }
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModal1(template: TemplateRef<any>) {
    this.onUpdate();
    this.modalRef = this.modalService.show(template);
  }
  openModal2(template: TemplateRef<any>) {
    this.onUpdate();
    this.modalRef = this.modalService.show(template,{class:'modal-lg'});
    this.user.forEach(element=>{
      this.dropdownList.push({ item_id: element.id, item_text: element.username})
    })
  }
  list;
  // get all workflow list
  getDataModel(){
    this.dataModelService.getAllDataModel().subscribe(resp=>{
   this.list=resp;
      this.workflowList=this.list; this.list ? this.list : [];
      console.log(this.workflowList)

          })
  }

  function(date1){
    const start = Date.now();
    if (date1>start) return true;
    else if (date1<start) return false;
    else return ("Bdet");
  }
  CurrentlyFlow;
  Details = false;
  editForm: any;
  editFormUpdate: any;

  entityDetails(w: DataModel) {
    this.Details=true;
    this.onTab(2);
    this.CurrentlyFlow=w;
    console.log(this.CurrentlyFlow);

  }
  Delete() {
    Swal.fire({
      title: 'Supprimer utilisateur ',
      text: 'Vous etes sur du supprimer cette utilisateur ?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      confirmButtonColor: "rgb(220, 53, 69)",
      confirmButtonText: 'Oui, Supprimer',

    }).then((result) => {
      if (result.value) {
        this.dataModelService.DeleteModel(this.CurrentlyFlow).subscribe(resp=>{
          this.getDataModel();
          this.onTab(1);
        })
          Swal.fire(
            'Opération terminé!',
            'Cette flux a ete supprimé avec succés',
            'success'
          )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annuler',
          'Vous avez annulé cette opération !',
          'error'
        )
      }
    })
  }
  onAdd() {
    console.log("aaaaaaaaaaaaa")
    let workflow: DataModel;
   workflow=new DataModel();
    workflow.dataModelName=this.editForm.get(['dataModelName'])!.value;
    workflow.dataModelDescrip=this.editForm.get(['dataModelDescrip'])!.value;
    workflow.startDate=this.editForm.get(['start'])!.value;
    workflow.endDate=this.editForm.get(['end'])!.value;
    console.log(workflow);
    this.dataModelService.CreateNew(workflow).subscribe(resp=>{
      this.modalRef.hide();
      Swal.fire(
        'Opération terminé!',
        'Cette flux de travail a été  ajouté avec succées ',
        'success'
      )
      this.getDataModel();
    })
  }
  onUpdate(){
    this.editFormUpdate.patchValue({
      dataModelName:this.CurrentlyFlow.dataModelName,
      dataModelDescrip:this.CurrentlyFlow.dataModelDescrip,
    })
console.log(this.editFormUpdate.get(['start'])!.value)
  }
  onClickUpdate(){
    this.CurrentlyFlow.dataModelName=this.editFormUpdate.get(['dataModelName'])!.value;
    this.CurrentlyFlow.dataModelDescrip=this.editFormUpdate.get(['dataModelDescrip'])!.value;
    if (this.editFormUpdate.get(['start'])!.value != ""){
      this.CurrentlyFlow.startDate=this.editFormUpdate.get(['start'])!.value;
    }
    if (this.editFormUpdate.get(['end'])!.value != ""){
      this.CurrentlyFlow.endDate=this.editFormUpdate.get(['end'])!.value;
    }
    this.dataModelService.updateModel(this.CurrentlyFlow).subscribe(resp=>{
      this.getDataModel();
      this.modalRef.hide();
      Swal.fire(
        'Opération terminé!',
        'Cette flux de travail a été  ajouté avec succées ',
        'success'
      )
    })
    console.log(this.CurrentlyFlow);
  }
NewEntity:Entity=new Entity();
  getEtape2() {
this.onTab1(2);
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  message="Veuillez choisir l'un de ces options suivantes";
  checkedUSER=false;
  checkedGroupe=false;
  checkedUser() {
    this.checkedUSER=true;
    this.checkedGroupe=false;
    this.message="Vueillez choisir un ou (plusieurs) utilisateur(s)";
  }
  chekedGroup(){
    this.checkedUSER=false;
    this.checkedGroupe=true;

  }

}
