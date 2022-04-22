var FortyTwoStrategy = require('passport-42').Strategy;

passport.use(new FortyTwoStrategy({
    clientID: FORTYTWO_APP_ID,
    clientSecret: FORTYTWO_APP_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/42/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ fortytwoId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/42',
  passport.authenticate('42'));

app.get('/auth/42/callback',
  passport.authenticate('42', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });