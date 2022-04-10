# Animagee
A inspired clone of Flickr.
Animagee is a website where you can share your anime images. 

# Index

# Technologies Used

# Gettings started
1. Clone this repo.
  ```sh
  git clone https://github.com/JayDrojas/authenticate-me.git
  ```
2. Install dependencies from the root directory.
  ``` sh
  npm install
  ```
3. Create a POSTGRESQL user CREATEDB and PASSWORD in PSQL.
  ``` sh
  CREATE USER <name> WITH CREATEDB PASSWORD <'password'>
  ```
4. Create a .env file in the backend directory. Use the .env.example in the backend directory.
5. Enter the database username and password you used to create on step 3 into the .env file as well as the secured combination of characters for your JWT_SECRET and your choice of PORT number (preferably 5000)
6. Add the following proxy to your package.json file within your frontend directory, replace or keep the 5000 port to match your PORT configuration you created in the previous step.
