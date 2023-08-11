import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { Review } from '../../../shared/models/Review';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  reviews: Review[] = [];
  name: string = '';
  rating: number | null = null;
  description: string = '';

  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        foodService.getFoodById(params.id).subscribe((serverFood) => {
          this.food = serverFood;
        });
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  addReview() {
    const newReview: Review = {
      id: 'some-unique-id',
      name: this.name,
      rating: this.rating || 0,
      title: '',
      description: this.description,
      date: new Date(),
      content: '',
    };

    this.reviews.push(newReview);

    // Reset form values
    this.name = '';
    this.rating = null;
    this.description = '';
  }
}

