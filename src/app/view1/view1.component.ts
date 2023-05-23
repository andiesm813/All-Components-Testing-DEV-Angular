import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public northwindEmployees: any = null;
  public value = '0';
  public financialBoxOfficeRevenue: any = null;
  public date: any;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('EmployeesType').subscribe(data => this.northwindEmployees = data);
    this.financialService.getData('BoxOfficeRevenueType').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
