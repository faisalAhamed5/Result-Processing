let LocalStrategy = require('passport-local').Strategy;

let bcrypt = require('bcrypt');
let models = require('./db/models');

const validPassword = function (user, password) {
	return bcrypt.compareSync(password, user.pass);
};
module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});
	passport.deserializeUser(function (id, done) {
		models.user_db.findOne({
			where: {
				'id': id
			}
		}).then(user => {
			if (user == null) {
				done(new Error('Wrong user id.'));
			}
			done(null, user);
		});
	});
	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
		function (req, email, pass, done) {
			return models.user_db.findOne({
				where: {
					'email': email
				},
			}).then(user => {
				if (user == null) {
					req.flash('message', 'Incorrect credentials.');
					return done(null, false);
				} else if (user.pass == null || user.pass == undefined) {
					req.flash('message', 'You must reset your password');
					return done(null, false);
				} else if (!validPassword(user, pass)) {
					req.flash('message', 'Incorrect credentials');
					return done(null, false);
				}
				return done(null, user);
			}).catch(err => {
				done(err, false);
			});
		}));
};