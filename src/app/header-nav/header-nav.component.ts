import { Component, OnInit } from '@angular/core';
import { fullNav } from '../../data/nav.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent implements OnInit{
  public nav: any;
  public index: number = 0;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    try{
      this.nav = fullNav;
      this.router.navigate(['/home'])
    }catch{

    }
  }

  onTabChange(event: any) {
    try{
      this.router.navigate(['/' + this.nav[event.index].route])      
    }catch{

    }
  }
}
