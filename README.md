

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)




### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI =mongodb+srv://wassim3meddeb:Wassimmeddeb9@sabattn.4w7bj.mongodb.net/SabatTN?retryWrites=true&w=majority
JWT_SECRET = 'wess'
PAYPAL_CLIENT_ID = ATDHuBTUobXum6sHg0GWDPQmmZ_okd6mwrZqNEG1lT8r0yFoHMER3Xc8yKdkJ5S9t6rh5XxpP2M-rasK
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

tester@example.com
012345

test2@example.com
123456

test3@example.com
123456


