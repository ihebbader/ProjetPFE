import {Entity} from './entity';

export class DataModel {
  id?:any;
  dataModelName?:string;
  dataModelDescrip?:string;
  startDate?:Date;
  endDate?:Date;
  entity?:Entity[];
}
