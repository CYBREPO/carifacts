export class locations {
   public static locations: Array<{ title: string, img: string, modalIds: Array<number> }> = [
      {
         title: 'Lagos',
         img: '../assets/images/Lagos.jpeg',
         modalIds: [1, 3, 4]
      },
      {
         title: 'Abuja',
         img: '../assets/images/Abuja.jpeg',
         modalIds: [1, 3, 4]
      },
      {
         title: 'Port Harcourt',
         img: '../assets/images/Portharcourt.jpeg',
         modalIds: [1, 2, 3, 4]
      },
      {
         title: 'Kano',
         img: '../assets/images/kano.jpeg',
         modalIds: [3, 4]
      },
      {
         title: 'Kaduna',
         img: '../assets/images/Kaduna.jpeg',
         modalIds: [1]
      },
      {
         title: 'Edo',
         img: '../assets/images/Edo.jpeg',
         modalIds: [1, 2]
      },
   ];


}

export class vehicleModels {
   public static vehicleModels: Array<{ id: number, brand: string, model: any, description: string, buttonText: string, img: string}> = [
      {
         id: 1,
         brand: 'Toyota',
         description: 'Some quick example text to build on the card brand and make up the bulk of the card content',
         buttonText: 'Button',
         img: '../assets/images/toyota.jpg',
         model: [{ name: 'innova', img: '../assets/images/toyota.jpg', price: 27, rating: 5 }, { name: 'innova', img: '../assets/images/toyota.jpg', price: 27, rating: 5 }, { name: 'innova', img: '../assets/images/toyota.jpg', price: 27, rating: 5 }, { name: 'innova', img: '../assets/images/toyota.jpg', price: 27, rating: 5 }],

      },
      {
         id: 2,
         brand: 'Mercedes Benz',
         description: 'Some quick example text to build on the card brand and make up the bulk of the card content',
         buttonText: 'Button',
         img: '../assets/images/mercedes.jpg',
         model: [{ name: 'mercedes-benz 280s', img: '../assets/images/mercedes.jpg', price: 27, rating: 5 }, { name: 'mercedes-benz 180s', img: '../assets/images/mercedes.jpg', price: 27, rating: 5 }, { name: 'mercedes-benz 380s', img: '../assets/images/mercedes.jpg', price: 27, rating: 5 }],

      },
      {
         id: 3,
         brand: 'Infiniti',
         description: 'Some quick example text to build on the card brand and make up the bulk of the card content',
         buttonText: 'Button',
         img: '../assets/images/infiniti.jpg',
         model: [{ name: 'Q50', img: '../assets/images/infiniti.jpg', price: 27, rating: 5 }, { name: 'QX60', img: '../assets/images/infiniti.jpg', price: 27, rating: 5 }, { name: 'Q60', img: '../assets/images/infiniti.jpg', price: 27, rating: 5 }, { name: 'QX50', img: '../assets/images/infiniti.jpg', price: 27, rating: 5 }],

      },
      {
         id: 4,
         brand: 'Acura',
         description: 'Some quick example text to build on the card brand and make up the bulk of the card content',
         buttonText: 'Button',
         img: '../assets/images/acura.jpg',
         model: [{ name: 'Acura TLX', img:  '../assets/images/acura.jpg', price: 27, rating: 5 }, { name: 'Acura RDX', img:  '../assets/images/acura.jpg', price: 27, rating: 5 }, { name: 'Acura ILX', img:  '../assets/images/acura.jpg', price: 27, rating: 5 }, { name: 'Mdx', img:  '../assets/images/acura.jpg', price: 27, rating: 5 }],
      },

   ];
}
