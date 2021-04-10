import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facedetect',
  templateUrl: './facedetect.component.html',
  styleUrls: ['./facedetect.component.css']
})
export class FacedetectComponent implements OnInit {

  video = document.getElementById('video')

  constructor() { }

  ngOnInit(): void {
  }

  
  

}
