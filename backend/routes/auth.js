const router = require("express").Router();
const passport = require("passport");

router.get("/linkedin", passport.authenticate("linkedin", ['r_liteprofile', 'r_emailaddress']));

router.get(
	"/linkedin/callback",
	passport.authenticate("linkedin", {
		successRedirect: "http://localhost:5173/testimonials",
		failureRedirect: "/",
	})
);


router.get("/getuser", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized, something went wrong !!!" });
	}
});


module.exports = router;