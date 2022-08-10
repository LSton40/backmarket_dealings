# Backmarket Dealings: Ecommerce App

By Logan Sutton

## Description

This Express served Sequelize database permits a user to view and modify a database comprised of three associated tables: `Category`, `Tag`, and `Product`. Product has a many-to-many relationship with Tag while Category has a one-to-many relationship with Product.

It is based upon starter code provided by another developer; I only created the table associations, specified the Models, and added the appropriate Sequelize methods. The database is seeded with code provided by the original developer.

Using an interface such as Insomnia, the user may view all items belonging to Categories, Tags, and Products, may view an individual item by id number, may create a new item for any of these three database tables, may update any existing field within these database tables, or may delete an item from any of the three database tables.

[Link to video walkthrough](https://drive.google.com/file/d/1f_fWPobmePWA4NG2ewzWWKMjU-jlTzEy/view)

## Table of Contents  

- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [How to Contribute](#how-to-contribute)  
- [Tests](#tests)  
- [Questions](#questions) 


## Installation  
    
This app requires the installation of Node.js, Express.js, MySQL, and Sequelize, and is tested and interfaced in the walkthrough video using Insomnia.

## Usage  
Once the appropriate supporting software is installed, source the schema.sql database, then run the command `npm run seed` in a command line to seed the database. Then, run `npm start` to initialize the server. Using Insomnia, set the localhost (default 3001) and set the `/api` route for all illustrated routes.

## License  
    
All rights reserved.

Copyright (c) 2022 Logan Sutton.  

## How to Contribute  
  
This app was created as a graded class challenge. No contribution is requested at present.  

## Tests  
    
No tests are suggested at this time.  

## Questions  
    
[LSton40 GitHub](https://github.com/LSton40)  

If you have any questions, please contact me at logan.sutton@gmail.com.
