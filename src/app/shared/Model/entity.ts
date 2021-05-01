import {User} from './user';

export class Entity {
  id?:any;
  EntityModelName?:string;
  EntityModelDescrip?:string ;
  StartDate?:Date;
  EndDate?:Date;
  EtapeOrd?:number;
  DelaiDexecutionEnHeure?:String;
  importantes?:Boolean;
  user?:User[];
}
