import { Model } from 'mongoose';

export type BookType = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: [];
  rating?: number;
};

export type BookModel = Model<BookType, Record<string, unknown>>;
