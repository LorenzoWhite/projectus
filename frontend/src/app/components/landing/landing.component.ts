import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  email: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.email)
    if(!this.validateService.validateEmail(this.email)){
      console.log("please use valid email")
      return false
    }
    this.authService.registerEmail(this.email)
    .subscribe(data =>{
      if(data.success){
        console.log('you are now registered')
      } else {
        console.log('you are not registered');
      }
    })
  }
}
