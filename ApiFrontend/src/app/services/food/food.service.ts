import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';



@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'Pizza Pepperoni',
        cooktime:'20-30',
        imageUrl:'/assets/image/food:image1.webp',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:2,
        name:'Chiness Nodules',
        cooktime:'20-30',
        imageUrl:'/assets/image/food:image2.jpeg',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:3,
        name:'Sushi',
        cooktime:'20-30',
        imageUrl:'/assets/image/food:image3.jpeg',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:4,
        name:'Dampling',
        cooktime:'20-30',
        imageUrl:'/assets/image/food-image9.webp',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:5,
        name:'Meatball',
        cooktime:'20-30',
        imageUrl:'/assets/image/food:image5.jpeg',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:6,
        name:'Oyster',
        cooktime:'20-30',
        imageUrl:'/assets/image/food:image6.jpeg',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:7,
        name:'Grilled sallmon ',
        cooktime:'20-30',
        imageUrl:'/assets/image/food:image7.jpeg',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:8,
        name:'Cream Bread',
        cooktime:'20-30',
        imageUrl:'/assets/image/food-image10.jpeg',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:8,
        name:'Cream Bread',
        cooktime:'20-30',
        imageUrl:'/assets/image/food-image11.jpeg',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:8,
        name:'Cream Bread',
        cooktime:'20-30',
        imageUrl:'/assets/image/food-image12.png',
        tags:['Fastfood','pizza' ,'lunch']
      },
      {
        id:8,
        name:'Cream Bread',
        cooktime:'20-30',
        imageUrl:'/assets/image/food-image13.avif',
        tags:['Fastfood','pizza' ,'lunch']
      }
    ]
   
}
}
