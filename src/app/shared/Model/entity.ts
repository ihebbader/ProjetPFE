import {AppUser} from './AppUser';
import {Properties} from './properties';
import {Notification} from './notification';

export class Entity {
  id?:any;
  entityModelName?:string;
  entityModelDescrip?:string ;
  startDate?:Date;
  endDate?:Date;
  etapeOrd?:number;
  status?:string;
  delaiDexecutionEnHeure?:number;
  importantes?:Boolean;
  user?:AppUser[];
  properties?:Properties[];
  notification?:Notification[];
  dateDeCreation?:Date;
  creator?:string;
  etat?:string;
  actived?:boolean;
  finished?:boolean;
  p?:any}
