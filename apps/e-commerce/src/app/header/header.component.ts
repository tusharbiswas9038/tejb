import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tejb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 press:boolean;
  constructor() { }

  ngOnInit(): void {
    this.press=true;
    document.getElementById("inPut").style.visibility = "hidden";
  }


cons(){
  this.press=!this.press;
  
  
    if(this.press){
      document.getElementById("inPut").style.visibility = "hidden";
    }
    else{
      document.getElementById("inPut").style.visibility = "visible";
    }
  
  console.log(this.press);
}
}
