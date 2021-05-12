# ProShop eCommerce Application

> eCommerce application built with the MERN stack & Redux.

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- JWT Authentication
- Login and Sign up to the application
- Product search feature
- User profile with orders
- Add Product Reviews
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal integration
- Database seeder (products & users)

## Usage

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end in the backend or you will get a "module not found" error

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

Snapshots of the project 👇

Admin Post Login Screen
<img src="Screenshots_proshop/Admin Post Login Screen.png" alt="Admin Post Login Screen">

User Post Login Screen
<img src="Screenshots_proshop/Post User Login Screen.png" alt="User Post Login Screen">

Payment Using Paypal
<img src="Screenshots_proshop/Payment Using Paypal.png" alt="Paypal Payment Screen">

Product Pagination
<img src="Screenshots_proshop/Product_pagination.png" alt="Product_pagination">

Checkout Screen
<img src="Screenshots_proshop/Checkout Screen.png" alt="Checkout Screen">

Steps to Checkout an Order
<img src="Screenshots_proshop/Steps to Checkout an Order.png" alt="Order Checkout Steps">
