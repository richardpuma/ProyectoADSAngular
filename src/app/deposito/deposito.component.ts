import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
