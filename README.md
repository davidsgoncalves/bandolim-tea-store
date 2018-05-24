# Bandolin tea store

Project made to fulfill Todo Cartões Challange.

## Get Started

This project it's about a cashier of a Tea Store, in the first screen you be 
able to select any tea by clicking in "+" button, adding to cart. After that, just click in "Complete the Purchase" to go to the last screen.

In the last Screen, just fill the data, and finish the action.


### Installing

Step 1: Clone repository:

```
git clone [this url]
```

Step 2: Run NPM Install, on root folder of git clone.

```
npm install
```

Step 3: Run application.

```
npm start
```


Step 6: Access the application by:
```
localhost:3000
```

### Prerequisites
this project was built with ``Node 7.10.0``

## Important!

This application uses an api with fake data.

It was supposed to be built getting data from Todo Cartões API, but i had some problems with CORS errors, so i create my own api with fake data.

### Change API base url
Just change the file in `/bandolim-tea-store/src/middleware/fetch_api.js` in line 10 from:
 
```
const endpoint = `https://bandolim-api-mock.herokuapp.com/api/v1/${path}`;
```
to 
```
const endpoint = `https://tea-store.herokuapp.com/api/${path}`;
```

## List of necessary improvements
* Create tests;
* Fix Linter Errors;
* Create a better layout;
* Add messages for errors;
* Return to first screen after the purchase;

## Built With

* [ReactJS](https://facebook.github.io/react/)

## Authors

* *David S. Gonçalves** - *Initial work* - [Github](https://github.com/davidsgoncalves)