export class User {
  id?:any;
  username?: string;
  nomPrenom?: string;
  email?: string;
  numTel?: number;
  actived?: boolean;
  roles?: roles[];
  post?: string;
  adresse?: string;
  password?: string;

}
export class roles{
  id?:any;
  roleName?:String;
}
