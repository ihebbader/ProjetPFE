import {Values} from './values';

export class Properties {
  idProp?:any;
  label?:string;
  labelPosition?:string;
  allowMultipleMasks?:string;
  hidden?:boolean;
  hideLabel?:boolean;
  showWordCount?:boolean;
  showCharCount?:boolean;
  mask?:boolean;
  autofocus?:boolean;
  spellcheck?:boolean;
  disabled?:boolean;
  tableView?:boolean;
  modalEdit?:boolean;
  multiple?:boolean;
  persistent?:boolean;
  inputFormat?:string;
  encrypted?:boolean;
  clearOnHide?:boolean;
  calculateServer?:boolean;
  validateOn?:string;
  type?:string;
  input?:boolean;
  dataGridLabel?:boolean;
  inputType?:string;
  defaultValue?:string;
  ord?:number;
  values?:Values[];
  data?:Values[];
  signature?:string;
  imageSize?:string;
  fileMinSize?:string;
  fileMaxSize?:string;
  filePattern?:string;
  storage?:string;
}

