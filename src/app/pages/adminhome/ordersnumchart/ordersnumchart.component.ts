import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-ordersnumchart',
  templateUrl: './ordersnumchart.component.html',
  styleUrls: ['./ordersnumchart.component.scss']
})
export class OrdersnumchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
var myChart = new Chart("chart1", {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'MAy', 'June'],
        datasets: [{
            label: 'No of Orders',
            data: [100, 68, 74, 112, 82, 56],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }

}
