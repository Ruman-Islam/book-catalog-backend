import express from 'express';

const router = express.Router();

// Defining an array of module routes to be mounted on the router
const moduleRoutes = [
  //   {
  //     path: '/users',
  //     route: UserRoutes,
  //   },
  //   {
  //     path: '/admins',
  //     route: AdminRoutes,
  //   },
  //   {
  //     path: '/auth',
  //     route: AuthRoutes,
  //   },
  //   {
  //     path: '/cows',
  //     route: CowRoutes,
  //   },
  //   {
  //     path: '/orders',
  //     route: OrderRoutes,
  //   },
];

// Iterate over the moduleRoutes array and mount each route on the router
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
