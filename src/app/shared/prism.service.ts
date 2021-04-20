import { Injectable } from '@angular/core';
declare var Prism: any;
@Injectable({
  providedIn: 'root'
})
export class PrismService {
  init() {
    Prism.highlightAll();
  }
  constructor() { }
}
