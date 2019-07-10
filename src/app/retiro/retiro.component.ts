import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
  mensaje: string; 
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  retiro(form: NgForm) {}

}
