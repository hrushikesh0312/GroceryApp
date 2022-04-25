import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Grocery } from '../../../utility/Grocery';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit ,OnChanges{

  constructor() { }

  ngOnInit(): void {
    
  }
  
  ngOnChanges(changes: SimpleChanges):void{
    console.log("ngOnChnages()");
  }

  grocerys:Grocery[] = [
    {groceryId:1,name:"mango",price:"150",image:"https://th.bing.com/th/id/OIP.UXDdUkAzLzHvrhAGDYsdCgHaEO?w=282&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",flag:true},
    ];

 // searchStr:string="";
  toggleImage(grocery :Grocery){
    grocery.flag = ! grocery.flag;
  }

}
