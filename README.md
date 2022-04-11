# Animagee
A inspired clone of Flickr.
Animagee is a website where you can share your anime images. 
# Index
| [Live link](https://animagee.herokuapp.com/) | [MVP Feature List](https://github.com/JayDrojas/animagee/wiki/Features) | [Database Schema](https://github.com/JayDrojas/animagee/wiki/Database-Schema) |

# Technologies Used
---
![alt text](https://github.com/abranhe/programming-languages-logos/blob/master/src/html/html_64x64.png?raw=true)
![alt text](https://github.com/abranhe/programming-languages-logos/blob/master/src/css/css_64x64.png?raw=true)
![alt text](https://github.com/abranhe/programming-languages-logos/blob/master/src/javascript/javascript_64x64.png?raw=true)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/nodejs.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/postgres.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/react.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/expressjs.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/heroku.svg)
![alt text](https://github.com/Workshape/tech-icons/blob/master/icons/git.svg)

---
# Gettings started
  1. Clone this repo.
   * ``` sh 
      git clone https://github.com/JayDrojas/authenticate-me.git 
      ```
  2. Install dependencies from the root directory.
   * ``` sh 
      npm install 
      ```
  3. Create a POSTGRESQL user CREATEDB and PASSWORD in PSQL.
   * ``` sh 
      CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
      ```
  4. Create a .env file in the backend directory. Use the .env.example in the backend directory.
  5. Enter the database username and password you used to create on step 3 into the .env file as well as the secured combination of characters for your JWT_SECRET and your choice of PORT number (preferably 5000)
  6. Add the following proxy to your package.json file within your frontend directory, replace or keep the 5000 port to match your PORT configuration you created in the previous step.
   * ``` sh 
      "proxy": "http://localhost:5000"
      ```
  7. Create Database, Migrate, and Seed models. In the backend directory
  - npx dotenv sequelize db:create
  - npx dotenv sequelize db:migrate
  - npx dotenv sequelize db:seed:all
  8. Start service in the backend directory.
   * ``` sh 
      npm start 
      ```
  9. To start the service in the frontend directory type the command below and that should open the project in your default browser. If not, navigate to http://localhost:3000.
   * ``` sh
      npm start 
      ```
  10. You can use the demo user or create an account to begin using Animagee.

# Features
Logged in users can perform the following actions.
  * Add/View/Edit/Delete Images
  * Add/View/Edit/Delete Comments
  
