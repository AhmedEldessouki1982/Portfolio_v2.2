const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

module.exports = function (passport) {
	passport.use(
		new LinkedInStrategy(
			{
				clientID: process.env.LINKEDIN_CLIENT_ID,
				clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
				callbackURL: "/auth/linkedin/callback",
				scope: ['r_liteprofile', 'r_emailaddress'],
			},
			function (accessToken, refreshToken, profile, done) {
				done(null, profile);
			}

		)
	);
	passport.serializeUser((user, done) => {
		done(null, user);
	});
	
	passport.deserializeUser((user, done) => {
		done(null, user);
	});
}