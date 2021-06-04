export class AppUser {
  id?:any;
  username?: string;
  nom?: string;
  prenom?: string;
  email?: string;
  numTel?: number;
  actived?: boolean;
  roles?: roles[];
  post?: string;
  adresse?: string;
  password?: string;
  sexe?: string;
  note?: string;
  image?:string;
  dateDeCreation?:Date;
}
export class roles{
  id?:any;
  roleName?:String;
}
