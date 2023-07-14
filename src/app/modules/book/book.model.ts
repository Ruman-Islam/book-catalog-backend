import { Schema, model } from 'mongoose';
import { BookModel, BookType } from './book.interface';

const BookSchema = new Schema<BookType, BookModel>(
  {
    title: {
      type: String,
      required: [true, 'title is missing!'],
    },
    author: {
      type: String,
      required: [true, 'author is missing!'],
    },
    genre: {
      type: String,
      required: [true, 'genre is missing!'],
    },
    publicationDate: {
      type: String,
      required: [true, 'publication date is missing!'],
    },
    reviews: {
      type: Array,
      default: [],
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Book = model<BookType, BookModel>('Book', BookSchema);
