import {Component, OnInit, TemplateRef} from '@angular/core';
import {DataModel} from '../../../shared/Model/data-model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Entity} from '../../../shared/Model/entity';
import {DatamodelService} from '../../../shared/service/workflow/DataModel/datamodel.service';
import {EntityService} from '../../../shared/service/workflow/entity.service';
import {document} from 'ngx-bootstrap/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supeper-visor-ihm',
  templateUrl: './supeper-visor-ihm.component.html',
  styleUrls: ['./supeper-visor-ihm.component.scss']
})
export class SupeperVisorIHMComponent implements OnInit {

  workflow:DataModel;
  submitMessageAlerte;
  submitVisible=false;
  modalRef: BsModalRef;
  json;
  currentlyEntity:Entity;
  form;
  dpgridTab: boolean;
  dplistTab: boolean = true;
  isCollapsed1 = false;
  isCollapsed2 = false;
  isCollapsed3 = false;
  isCollapsed4 = false;
  isCollapsed5 = false;
  isCollapsed6 = false;
  ListDataModel;
  dataModels:DataModel[] | null=null;
  message=null;
  alerte=false;
  constructor(private DataModelService:DatamodelService,private modalService: BsModalService
    ,private  EntityModelServie:EntityService) { this.form={components: []};}

  ngOnInit(): void {
    this.getUserDataModelProject();
  }
  onTab(number) {
    this.dplistTab = false;
    this.dpgridTab = false;
    if (number == '1') {
      this.dplistTab = true;
      this.visible=false;
    }
    else if (number == '2') {
      this.dpgridTab = true;
      this.visible=true;
    }
  }
  getUserDataModelProject(){
    this.message=null;
    this.alerte=false;
    this.DataModelService.getForSuper().subscribe(resp=>{
      this.ListDataModel=resp;
      this.dataModels=this.ListDataModel ; this.ListDataModel ? this.ListDataModel : [];
      this.dataModels.forEach(dataModel=> {
        dataModel.entity.forEach(entity => {
          let res=entity.properties.sort((a,b)=>
            a.idProp-b.idProp
          )
          entity.properties=res;
          console.log(res);
        })
      })
      this.SetMessage();
    },error => {
      console.log(error);
    })
    console.log()


  }
  SetMessage(){
    console.log(this.dataModels)
    if(this.dataModels==null){
      this.alerte=true;
      this.message="Vous n'avez pas encore une operation à executer  ";
    }
    console.log(this.alerte)

  }
  visible=false;
  alert=""
  tab2(entity:Entity) {
    this.alert=""
    this.visible=true;
    this.currentlyEntity=entity;
    this.form={components: []};
    this.form.components=entity.properties;
    this.json=this.form

    if(entity.etat=='Terminer'){
      this.alert="L'execution de ce processus est terminer";
      //  document.getElementById('test').style.pointerEvents='none';
    }
    if(entity.etat=='Programmé'){
      this.alert="L'execution de ce processus commence bientot"
      //  document.getElementById('test').style.pointerEvents='none';
    }
  }
  dataForm=[];
  iheb(event) {
// this.currentlyEntity.properties.forEach(p=>{
//   console.log(this.dataForm[i])
//  // p.data= this.dataForm[i];
//    i++;
// })
    console.log(event.changed.component.idProp);
    console.log(event);
    this.currentlyEntity.properties.forEach(
      p=>{
        if(p.idProp==event.changed.component.idProp){
          p.defaultValue=event.changed.value;
        }
      }
    )
  }
  openModal1(template: TemplateRef<any>,enetity,workflow) {
    this.submitVisible=false;
    this.workflow=workflow;
    this.tab2(enetity);
    console.log(this.currentlyEntity);
    this.modalRef = this.modalService.show(template,{class:'modal-lg'});
    this.workflow.entity.forEach(e=>{
      let p = e.properties;
      let json={components: []};
      json.components=p;
      e.p=json;
    })
    console.log(this.workflow)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class:'modal-lg'});
  }
  onSubmit(){
    console.log(this.currentlyEntity);
    this.currentlyEntity.actived=false;
    Swal.fire(
      'Opération terminé!',
      'opération terminer ! ',
      'success'
    )
    this.submitVisible=true;
    this.submitMessageAlerte="operation Terminer";
    this.EntityModelServie.executeEntityModel(this.currentlyEntity).subscribe(resp=>{

    })
    this.modalRef.hide();
  }
}
