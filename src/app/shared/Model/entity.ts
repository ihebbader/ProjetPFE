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
  delaiDexecutionEnHeure?:number;
  importantes?:Boolean;
  user?:AppUser[];
  properties?:Properties[];
  notification?:Notification[];
}
