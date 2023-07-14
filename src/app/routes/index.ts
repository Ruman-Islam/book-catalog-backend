import express from 'express';
import { BookRoutes } from '../modules/book/book.route';

const router = express.Router();

// Defining an array of module routes to be mounted on the router
const moduleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
];

// Iterate over the moduleRoutes array and mount each route on the router
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
