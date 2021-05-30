import { Component, OnInit } from '@angular/core';
import {DatamodelService} from '../../../../shared/service/workflow/DataModel/datamodel.service';
import {DataModel} from '../../../../shared/Model/data-model';
import {Entity} from '../../../../shared/Model/entity';
import {document} from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-pr-projectlist',
  templateUrl: './pr-projectlist.component.html',
  styleUrls: ['./pr-projectlist.component.scss']
})
export class PrProjectlistComponent implements OnInit {
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
  constructor(private DataModelService:DatamodelService) { this.form={components: []};}

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
    this.DataModelService.getUserWorkflowProject().subscribe(resp=>{
       this.ListDataModel=resp;
      this.dataModels=this.ListDataModel ; this.ListDataModel ? this.ListDataModel : [];
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
    this.onTab(2);
    if(entity.etat=='Terminer'){
      this.alert="L'execution de ce processus est terminer";
      document.getElementById('test').style.pointerEvents='none';
    }
    if(entity.etat=='Programmé'){
      this.alert="L'execution de ce processus commence bientot"
      document.getElementById('test').style.pointerEvents='none';
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
    console.log(event.changed.value);
    this.currentlyEntity.properties.forEach(
      p=>{
        if(p.idProp==event.changed.component.idProp){
       p.data=event.changed.value;
        }
      }
    )
  }
  bader(){
    console.log(this.currentlyEntity);
  }
}
