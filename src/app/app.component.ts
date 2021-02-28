import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  images: String[];
  result2 = "";
  inputdisabled = false;
  disableFlag = true;
  result = "  WELCOME TO OUR RESTURANT MITRON!!!!!!!";
  imageUrl = "assets/pngtree--png-image_4124521.jpg"
  imageUrlSecond = "assets/res-2.jpg";
  imageThird = "assets/res-3.jpg"
  editBtnStus = true;
  constructor() {


    //console.log(this.disableFlag);
    this.images = [this.imageUrl, this.imageUrlSecond, this.imageThird];
  }
  textAreaEmpty() {
    this.result2 != '' ? this.disableFlag = false : this.disableFlag = true;
  }

  submitDetails() {
    this.inputdisabled = true;
    this.disableFlag = true;
    this.editBtnStus = false;

  }
  editButton()
  {
    this.inputdisabled=false;
    this.editBtnStus = true;
  }


}
