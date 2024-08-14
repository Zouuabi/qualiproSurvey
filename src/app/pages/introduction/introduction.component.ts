import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  private router! : Router ;
  constructor( router :Router){
    this.router = router ;

  }

  onClick(){
    this.router.navigate(["/survey"])
  }
}
  