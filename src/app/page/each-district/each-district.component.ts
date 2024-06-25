import { Component, TrackByFunction } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-each-district',
  templateUrl: './each-district.component.html',
  styleUrls: ['./each-district.component.scss']
})
export class EachDistrictComponent {
  districtId: number = 0;
  districts: any;
 

  constructor(private route: ActivatedRoute) {
   
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.districtId = +params['id'];
      this.getDistrictDetails(this.districtId);
    });
  }

  async getDistrictDetails(id: number) {
    const url = `https://thirsty-sparkly-prince.glitch.me/districtlist/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
      this.districts = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  
}
