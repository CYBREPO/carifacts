export class locations {
   public static locations: Array<{ title: string, img: string, modalIds: Array<number>}> = [
      {
         title: 'Lagos',
         img: '../assets/images/Lagos.jpeg',
         modalIds: [1,3,4]
      },
      {
         title: 'Abuja',
         img: '../assets/images/Abuja.jpeg',
         modalIds: [1,3,4]
      },
      {
         title: 'Port Harcourt',
         img: '../assets/images/Portharcourt.jpeg',
         modalIds: [1,2,3,4]
      },
      {
         title: 'Kano',
         img: '../assets/images/kano.jpeg',
         modalIds: [3,4]
      },
      {
         title: 'Kaduna',
         img: '../assets/images/Kaduna.jpeg',
         modalIds: [1]
      },
      {
         title: 'Edo',
         img: '../assets/images/Edo.jpeg',
         modalIds: [1,2]
      },
   ];


}

export class vehicleModels {
   public static vehicleModels: Array<{id:number, title: string, description: string, buttonText: string, img: string }> = [
      {
         id: 1,
         title: 'Lexus/Toyota',
         description: 'Some quick example text to build on the card title and make up the bulk of the card content',
         buttonText: 'Button',
         img: '../assets/images/toyota.jpg'
      },
      {
         id: 2,
         title: 'Mercedes Benz/BMW',
         description: 'Some quick example text to build on the card title and make up the bulk of the card content',
         buttonText: 'Button',
         img: '../assets/images/mercedes.jpg'
      },
      {
         id: 3,
         title: 'Infiniti/Nissan',
         description: 'Some quick example text to build on the card title and make up the bulk of the card content',
         buttonText: 'Button',
         img: '../assets/images/infiniti.jpg'
      },
      {
         id: 4,
         title: 'Acura/Honda',
         description: 'Some quick example text to build on the card title and make up the bulk of the card content',
         buttonText: 'Button',
         img: '../assets/images/acura.jpg'
      },

   ];
}
