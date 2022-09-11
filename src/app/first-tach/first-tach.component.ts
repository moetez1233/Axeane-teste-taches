import { Component, OnInit } from '@angular/core';
import { Users } from './Users';

@Component({
  selector: 'app-first-tach',
  templateUrl: './first-tach.component.html',
  styleUrls: ['./first-tach.component.scss']
})
export class FirstTachComponent implements OnInit {

  users: Users[] = [{
    "id": 1,
    "firstName": "ali",
    "lastName": "Cruise",
    IsEdit:false,
    IsSave:true
},
{
    "id": 2,
    "firstName": "Morad",
    "lastName": "Sharapova",
    IsEdit:false,
    IsSave:true
},
{
    "id": 3,
    "firstName": "Smaiil",
    "lastName": "Bond",
    IsEdit:false,
    IsSave:true
}
];
name = '';
ShowEditButton=false
ShowSaveButton=false
firstname:string=''
lastName:string=''
message:string=''

  constructor() { }

  ngOnInit(): void {
    console.log(this.users[0].firstName);
  }
  EditUser(user:Users){
    user.IsEdit=true;
   user.IsSave=false;
    //this.ShowSaveButton=true;
    
  }
  SaveChang(id:number){
    this.firstname = (<HTMLInputElement>document.getElementById("firstN")).value;
    this.lastName = (<HTMLInputElement>document.getElementById("lastN")).value;
    var x= (<HTMLInputElement>document.getElementById("showAlert"))


if(this.firstname.length>0  && this.lastName.length>0){
  this.users[id].IsEdit=false
  this.users[id].IsSave=true
  this.users[id].firstName=this.firstname
  this.users[id!].lastName=this.lastName
  x.style.display='none'
}else{
 
 x.style.display='block'
 if(this.firstname.length==0)this.message="FirstName "; else this.message="Last Name"

}


   

  }
 
  CancelChang(id:number){
  

    this.users[id].IsEdit=!this.users[id].IsEdit
    this.users[id].IsSave=! this.users[id].IsSave
  
  }


}
