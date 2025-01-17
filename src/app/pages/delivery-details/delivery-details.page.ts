import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.page.html',
  styleUrls: ['./delivery-details.page.scss'],
  standalone: false
})
export class DeliveryDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id on details page ', id);
  }

}
