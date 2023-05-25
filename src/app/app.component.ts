import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'autohyre';
  vehicleModels = [
    {
      title: 'Lexus/Toyota',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../assets/images/toyota.jpg'
    },
    {
      title: 'Mercedes Benz/BMW',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../assets/images/mercedes.jpg'
    },
    {
      title: 'Infiniti/Nissan',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../assets/images/infiniti.jpg'
    },
    {
      title: 'Acura/Honda',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../assets/images/acura.jpg'
    },

  ];



  locations = [
    {
      title: 'Lagos',
      img: '../assets/images/Lagos.jpeg'
    },
    {
      title: 'Abuja',
      img: '../assets/images/Abuja.jpeg'
    },
    {
      title: 'Port Harcourt',
      img: '../assets/images/Portharcourt.jpeg'
    },
    {
      title: 'Kano',
      img: '../assets/images/kano.jpeg'
    },
    {
      title: 'Kaduna',
      img: '../assets/images/Kaduna.jpeg'
    },
    {
      title: 'Edo',
      img: '../assets/images/Edo.jpeg'
    },
  ];
}
