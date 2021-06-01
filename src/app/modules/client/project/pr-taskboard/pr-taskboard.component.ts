import {Component, ElementRef, EventEmitter, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ApexChart, ApexNonAxisChartSeries, ApexPlotOptions, ChartComponent} from 'ng-apexcharts';
import {DatamodelService} from '../../../../shared/service/workflow/DataModel/datamodel.service';
import {DataModel} from '../../../../shared/Model/data-model';
import {FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {UserService} from '../../../../shared/service/users/user.service';
import {AppUser} from '../../../../shared/Model/AppUser';
import {Components, FormioRefreshValue} from '@formio/angular';
import {PrismService} from '../../../../shared/prism.service';
import {EntityService} from '../../../../shared/service/workflow/entity.service';
import {Entity} from '../../../../shared/Model/entity';
import {Properties} from '../../../../shared/Model/properties';
import {Notification} from '../../../../shared/Model/notification';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import components = Components.components;


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
  AddNewUserFoem=true;
  NotificationForm1=true;
  CurrentlyEntity:Entity=new Entity();
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  workflowList:DataModel[] | null=null;
  UpdateFormEntity:any;
  ListProperty:any;
  json11 :any ;
  alerte;
  e = {components: []};
  entity: Properties[] = null;


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(event);
  }
  NotifacationForm=false;
  tab11=true;
  tab22=false;
  tab33=false;
  tab44=false;
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
  NotForm: any;
  AppUser:AppUser[] | null=null;
  modalRef: BsModalRef;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public formtest ;
  //  {"components":[{"id":7,"label":"Text Field","labelPosition":"top","allowMultipleMasks":"false","hidden":false,"hideLabel":false,"showWordCount":false,"showCharCount":false,"mask":false,"autofocus":false,"spellcheck":true,"disabled":false,"tableView":true,"modalEdit":false,"multiple":false,"persistent":true,"inputFormat":"plain","encrypted":false,"clearOnHide":true,"calculateServer":false,"validateOn":"change","type":"textfield","input":true,"dataGridLabel":false,"inputType":"text"}]};
  @ViewChild('json', {static: true}) jsonElement?: ElementRef;
  @ViewChild('code', {static: true}) codeElement?: ElementRef;
  public form: Object;
  public form1: Object;
  public EntityForm;
  public formFromDataBase:Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  public refreshForm1: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(public prism: PrismService,
                private router:Router,
                private test:EntityService,private EntityModel:EntityService,private modalService: BsModalService, private dataModelService: DatamodelService,private fb:FormBuilder,private DataModelService:DatamodelService,private userService:UserService) {
    this.form = {components: []};
    this.form1 = {components: []};
    this.UpdateFormEntity=this.fb.group({
      entityModelName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      entityModelDescrip:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      start:['',Validators.required],
      end:['',Validators.required]
    });
    this.NotForm=this.fb.group({
      role:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      status:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      message:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    });
    this.EntityForm=this.fb.group({
      EntityModelName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      EntityModelDescrip:['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      DelaiDexecutionEnHeure:['',[Validators.minLength(1),Validators.maxLength(2)]]
    });
    this.editForm=this.fb.group({
      dataModelName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      dataModelDescrip:['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
      start:['',Validators.required],
      end:['',Validators.required]
    });
    this.editFormUpdate=this.fb.group({
      dataModelName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      dataModelDescrip:['',[Validators.required,Validators.minLength(5),Validators.maxLength(1000)]],
      start:['',Validators.required],
      end:['',Validators.required]
    });
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
  ngAfterViewInit() {
    this.prism.init();
  }
  ngOnInit(): void {
   // this.prism.init();
    this.getDataModel();
    this.getUserList();
    console.log(this.AppUser);

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
      idField: 'id',
      textField: 'username',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }
  ListUsers;
getUserList(){
  this.userService.getAllusers().subscribe(resp=>{
   this.ListUsers=resp;

    this.AppUser=this.ListUsers; this.ListUsers ? this.ListUsers : [];
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
  tab3inter=false;
  onTab1(number) {
    this.tab1=true;
    this.tab1=true;
    this.tab2=false;
    this.tab3=false;
    this.tab4=false;
    if (number == '1') {
      this.tab1inter=true;
      this.tab1=true;
      this.etapeGenerame=true;
      this.tab2inter=false;
      this.tab3inter=false;

    }
    else if (number == '2') {
      this.tab1inter=false;
      this.tab1=false;
      this.tab2=true;
      this.tab3=false;
      this.tab2inter=true;
      this.tab3inter=false;

    }  else if (number == '3') {
      this.alertebool=false;
      this.tab1inter=false;
      this.tab1=false;
      this.tab2=false;
      this.tab3=true;
      this.tab2inter=false;
      this.checkedUSER=false;
      this.tab3inter=true;
    }
    else if (number == '4') {
      this.tab1inter=false;
      this.tab1=false;
      this.tab2=false;
      this.tab3=false;
      this.tab4=true;
      this.tab3inter=false;
      this.tab2inter=false;

    }

    }
onTab3(number){
    if(number == '1'){
      this.tab11=true;
      this.tab22=false;
      this.tab33=false;
      this.tab44=false;
    }else if(number=='2'){
      this.tab11=false;
      this.tab22=true;
      this.tab33=false;
      this.tab44=false;
    }else if(number =='3'){
      this.tab11=false;
      this.tab22=false;
      this.tab33=true;
      this.tab44=false;
    }else if(number == '4'){
      this.tab11=false;
      this.tab22=false;
      this.tab33=false;
      this.tab44=true;
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
    this.not=[];
    this.resetAllFormGroup();
    this.onTab1(1);
    this.onUpdate();
    this.modalRef = this.modalService.show(template,{class:'modal-lg'});
    this.AppUser.forEach(element=>{
      this.dropdownList.push({ id: element.id, username: element.username})
    })
    this.selectedItems=[];

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
console.log(this.CurrentlyFlow.dataModelName)
  }
  onClickUpdate(){
    this.CurrentlyFlow.dataModelName=this.editFormUpdate.get(['dataModelName'])!.value;
    this.CurrentlyFlow.dataModelDescrip=this.editFormUpdate.get(['dataModelDescrip'])!.value;
    if (this.editFormUpdate.get(['start'])!.value != null){
      this.CurrentlyFlow.startDate=this.editFormUpdate.get(['start'])!.value;
    }
    if (this.editFormUpdate.get(['end'])!.value != null){
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
  messageAlerte;
  alertebool=false;
NewEntity:Entity=new Entity();
  getEtape2() {
    this.selectedItems=[];
    this.NewEntity.entityModelName=this.EntityForm.get(['EntityModelName'])!.value;
    this.NewEntity.entityModelDescrip=this.EntityForm.get(['EntityModelDescrip'])!.value;
    this.NewEntity.startDate=this.EntityForm.get(['startDate'])!.value;
    this.NewEntity.endDate=this.EntityForm.get(['endDate'])!.value;
    this.NewEntity.delaiDexecutionEnHeure=this.EntityForm.get(['DelaiDexecutionEnHeure'])!.value;
    if(this.NewEntity.entityModelName== "" || this.NewEntity.entityModelDescrip=="" ){
      this.alertebool=true;
      this.messageAlerte="Veuillez remplir les champs correctement";
      return;
    }
this.onTab1(2);

console.log(this.NewEntity);
  }


  getEtape3(){

this.alertebool=false;
    if(this.selectedItems.length==0){
      this.alertebool=true;
      this.messageAlerte="Vueillez selectionner au minimum un utilisateur";
      return;
    }
   let AppUser=[];
    this.onTab1(3);
    this.selectedItems.forEach(element=>{
     AppUser.push(element);

    })
    this.NewEntity.user=AppUser;
    console.log(this.NewEntity);
  }
  onItemSelect(item: any) {
  }
  onSelectAll(items: any) {

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
  properties:Properties[];
  onChange(event) {
    this.refreshForm.emit({
      property: 'form',
      value: event.form
    });
    //
  //  this.formFromDataBase=event.form.components
    //this.properties=event.form.components;
    // console.log(this.property);
  //
    //
    this.properties=this.form.components;
    console.log(this.form.components);
    this.NewEntity.properties=this.properties;
  }
  onChangeUpdate(event) {
    this.refreshForm.emit({
      property: 'form1',
      value: event.form
    });
    //
    //  this.formFromDataBase=event.form.components
    //this.properties=event.form.components;
    // console.log(this.property);
    //
    //
    console.log(this.json11);
  }

   setNotificationForm(){
    this.NotifacationForm=true;
  }
  not;
  onNotificationClick(){

    let notifiaction: Notification=new Notification();
    notifiaction.role=this.NotForm.get(['role'])!.value;
    notifiaction.status=this.NotForm.get(['status'])!.value;
    notifiaction.message=this.NotForm.get(['message'])!.value;
    console.log(notifiaction)
    this.not=[];
    this.not.push(notifiaction)
    this.NewEntity.notification=this.not;

    console.log(this.NewEntity.properties)

  }
  // executer la requete
  finish(){
    let i=1;
    this.NewEntity.properties.forEach(p=>{
      p.ord=i;
      i=i+1;
    })
    this.NewEntity.creator=localStorage.getItem('username');
    let timerInterval;
    // @ts-ignore
    Swal.fire({
        title: "Exécution de l'opération !",
      html: "L'execution de cette opération est en cours <b></b> ",
      timer: 20000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = String(Swal.getTimerLeft())
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })




    this.EntityModel.addEntityToData(this.CurrentlyFlow.id,this.NewEntity).subscribe(resp=>{
 // console.log(resp);
console.log(this.NewEntity);
      this.getDataModel();
      this.CurrentlyFlow
      this.CurrentlyFlow.entity.push(this.NewEntity);
      this.modalRef.hide();
      Swal.fire(
        'Opération terminé!',
        'Cette flux de travail a été  ajouté avec succées ',
        'success'
      )
},err => {
      this.alertebool=true;
      this.messageAlerte=err.error.message;
  console.log(err.error.message);
})
    this.entityDetails(this.CurrentlyFlow);

}
DeleteEntity(e){
this.EntityModel.DeleteEntityFromModel(e.id).subscribe(resp=>{
  console.log(resp);

  this.CurrentlyFlow.entity.splice(this.CurrentlyFlow.entity.indexOf(e),1)
  this.entityDetails(this.CurrentlyFlow);
},error => {

  console.log(error);
})
}
updateEntity(template,entity){
    this.openModal2(template);
    this.CurrentlyEntity=entity;
    console.log(this.CurrentlyEntity);
  this.UpdateFormEntity.patchValue({
    entityModelName:this.CurrentlyEntity.entityModelName,
    entityModelDescrip:this.CurrentlyEntity.entityModelDescrip,
  })
  this.getFurmFromEntity();
}
getFurmFromEntity(){
    this.dataModelService.getModelById(this.CurrentlyEntity.id).subscribe(resp=>{
      this.ListProperty = resp;
      this.entity = this.ListProperty;
      this.ListProperty ? this.ListProperty : [];
      this.e.components = this.entity;
      //this.entity=resp;
      console.log(this.e);
      this.json11 =this.e;
      console.log(this.json11);
    })
}

openFormUpdate(template){
    this.selectedItems=[];
    this.openModal2(template);
  this.selectedItems=[];

}
addNewNotificationUpdate(){
    this.NotificationForm1=false;


}
//Modifier les inforation générale d'une entity
UpdateGeneraleIformation(){
    this.CurrentlyEntity.entityModelName=this.UpdateFormEntity.get(['entityModelName'])!.value;
    this.CurrentlyEntity.entityModelDescrip=this.UpdateFormEntity.get(['entityModelDescrip'])!.value;
    if(this.UpdateFormEntity.get(['start'])!.value !="") {
      this.CurrentlyEntity.startDate=this.UpdateFormEntity.get(['start'])!.value;
    }
      if(this.UpdateFormEntity.get(['end'])!.value !="") {
         this.CurrentlyEntity.endDate=this.UpdateFormEntity.get(['end'])!.value;
}
     this.EntityModel.UpdateEntityModel(this.CurrentlyEntity).subscribe(resp=>{
        Swal.fire(
          'Opération terminé!',
          'Cette entité a été bien mise à jour',
          'success'
        );
       this.modalRef.hide();
     })
  }
  AddNewUser(){
   this.AddNewUserFoem=false;
  }
  onClickAddNewUser(){
    this.alerte=null;
    console.log(this.selectedItems);
    if(this.selectedItems.length==0){
      this.alerte="Vueillez choisir un ou plusieurs utilisateurs ou annuler cette opération !";
    }else{
      this.EntityModel.addUserToEntity(this.CurrentlyEntity.id,this.selectedItems).subscribe(resp=>{
        Swal.fire(
          'Opération terminé!',
          'Cette entité a été bien mise à jour',
          'success'
        );
        this.modalRef.hide();
      })
    }
  }
  onClickFormEntity(){
    this.CurrentlyEntity.properties=this.json11;
    this.test.UpdateEntityModel(this.CurrentlyEntity).subscribe(resp=>{
      console.log(resp);
      this.modalRef.hide();

    })
  }
resetAllFormGroup(){
    this.not=null;
    this.EntityForm.reset();
    this.NotForm.reset();
    this.selectedItems=[];
    this.dropdownList=[];
}
}
