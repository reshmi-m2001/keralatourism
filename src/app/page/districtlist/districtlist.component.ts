import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-districtlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './districtlist.component.html',
  styleUrl: './districtlist.component.scss'
})
export class DistrictlistComponent {


  districts: any;

 
  constructor(private router:Router) {
    
    this.fetchData();
  }
  async fetchData() {
    const url = 'https://thirsty-sparkly-prince.glitch.me/districtlist';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data)
      this.districts = data;
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  viewDistrictDetails(id:number){
    this.router.navigate(['/districts',id])
  }
}
