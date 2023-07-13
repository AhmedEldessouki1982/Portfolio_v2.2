1. npm init
2. install system dependancies [express, mongoose, connect-mongo, express-session, dotenv, method-override, moment, morgan, passport, passport-google-oauth20]
3. install dev dependancies npm i -D [nodemon cross-env]
4. in the package.json, modfy the "script section" --> "start": "cross-env NODE_ENV=production node server"
5. in the package.json, modfy the "script section" --> "dev": "cross-env NODE_ENV=development nodemon server"
6. create server.js file
7. create db file and coonection function to connect to db
8. import in main file and run the connection to both db and server.
