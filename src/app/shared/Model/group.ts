import {AppUser} from './AppUser';

export class Group {
  id?:any;
  nom?:string;
  description?:string;
  dateDeCreation?:string;
  appUsers?:AppUser[];
}
