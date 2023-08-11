import { Component, OnInit } from '@angular/core';
import { Review } from '../../../shared/models/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  showThankYouMessage: boolean = false;
  name: string = '';
  rating: number | null = null;
  description: string = '';
  content: string = '';

  ngOnInit() {
    // Initialize reviews data
    this.reviews = [
      {
        id: '1',
        name: 'Walaa Gamal',
        rating: 4,
        title: 'Great product!',
        description: 'I really loved this product. It exceeded my expectations.',
        date: new Date('2022-06-15'),
        content: 'This is a great product that I would highly recommend to others.'
      },
      {
        id: '2',
        name: 'Mahmoud Mohamed',
        rating: 5,
        title: 'Highly recommended',
        description: 'This product is amazing. I would recommend it to everyone.',
        date: new Date('2022-07-02'),
        content: 'I have been using this product for a while now, and it never disappoints.'
      }
    ];
  }

  addReview() {
    const newReview: Review = {
      id: 'some-unique-id',
      name: this.name,
      rating: this.rating || 0,
      title: '',
      description: this.description,
      date: new Date(),
      content: this.content
    };

    this.reviews.push(newReview);
    this.showThankYouMessage = true;

    // Reset form values
    this.name = '';
    this.rating = null;
    this.description = '';
    this.content = '';
  }
}
