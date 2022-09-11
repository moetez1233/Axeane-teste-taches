import { Employees } from './../Models/Employees';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { EmplHeader } from '../Models/EmplHeader';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService:UserService) { }

allEmployees:Employees[]=[]
firstNameChow=false
emailShow=false
CityShow=false
PhoneShow=false
StreetShow=false
listEmpToAdd:EmplHeader[]=[
  {"name":"username",isCheked:false},
  {"name":"Email",isCheked:false},
  {"name":"phone",isCheked:false},
  {"name":"Streeet",isCheked:false},
  {"name":"City",isCheked:false}
]

  ngOnInit(): void {
    console.log(this.allEmployees);
    this.GetAllEmployees()
    console.log(this.listEmpToAdd[3].name);
    
    
  }
  GetAllEmployees(){
    console.log("hello");
    
    this.userService.listUser().subscribe(res=>{
      this.allEmployees=res as Employees[];
      console.log(this.allEmployees[0].address?.street);
      
    })
  }
  AddColum(emplheader:EmplHeader){
    console.log(emplheader);
    console.log(this.allEmployees[0]);
    
   emplheader.isCheked=!emplheader.isCheked
   for(let i=0;i<this.allEmployees.length;i++){
    if(emplheader.name==this.allEmployees[i].username){
      this.allEmployees[i].isCheked=!this.allEmployees[i].isCheked
    }
   }
 
   
   
   
  
    /* console.log(emplheader);
     
    if(emplheader?.name=="City"){
      this.CityShow=true
      emplheader.isCheked=!emplheader.isCheked
      if(!emplheader?.isCheked)this.CityShow=false
    }
    else if(emplheader?.name=="phone"){this.PhoneShow=true
      emplheader.isCheked=!emplheader.isCheked
      if(!emplheader?.isCheked)this.PhoneShow=false
    }
    else if(emplheader?.name=="Streeet"){
      this.StreetShow=true
      emplheader.isCheked=!emplheader.isCheked
      if(!emplheader?.isCheked)this.StreetShow=false
    }else if(emplheader?.name=="FirstName"){
      this.firstNameChow=true
      emplheader.isCheked=!emplheader.isCheked
      if(!emplheader?.isCheked)this.firstNameChow=false
    }else if(emplheader?.name=="Email"){
      this.emailShow=true
      emplheader.isCheked=!emplheader.isCheked
      if(!emplheader?.isCheked)this.emailShow=false
    }
    */
  }
 


}
