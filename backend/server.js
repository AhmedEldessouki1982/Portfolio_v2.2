const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const connectDB = require('./db/connect.js');
const passport = require('passport');
const server = express();
const cookieSession = require("cookie-session");
const session = require('express-session');
server.use(express.json());
//config port
const PORT = process.env.PORT || 5000;

//middleware section
// server.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["eldessouki"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );

server.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

server.use(passport.initialize());
server.use(passport.session());

server.use(
	cors({
		origin: "http://localhost:5173",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

require('./auth/passport.js')(passport);
server.use("/auth",require('./routes/auth.js'));
server.use("/api/v1/posts", require('./routes/posts.js'));

//server app starter and db init 
let start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        server.listen (
            PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port number ${PORT}`)
        )
    }
    catch (err) {
        console.log(err);
    }
}

start();