import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
}


$(document).ready(function() {
  $("#img_2").hide();
  $(".join-button").hover(function() {
    $("#img_1").hide();
    $("#img_2").show();
  });
  $(".join-button").mouseout(function() {
    $("#img_1").show();
    $("#img_2").hide();
  });
});