import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  id: number;
  path: string;

  nextHref: string;
  nextDisplay: string;

  previousHref: string;
  previousDisplay: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = +params['id'];
      this.path = `/reports/week ${this.id}.md`;
    });
  }

  ngOnInit() {
  }

}
