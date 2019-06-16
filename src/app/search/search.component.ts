import { Component, EventEmitter, Input, Output, OnInit  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
  })
export class SearchComponent {
  constructor(private router: Router){}

search(value:string){
  if(value===""||!value){
    window.alert("please put value");
  }
  else{this.router.navigate(['/search', value]);}
  
}
}