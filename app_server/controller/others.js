module.exports.about = function(req, res) {
  res.render('generic-text', {
  title: 'About Movietime',
  content:  'MovieTime was created to help you book movie tickets online. MovieTime helps you save time by booking your movie tickets online without wasting your time by standing in queues at theatres.You can enjoy watching your favourite actor/actress perfrom on screen and watch their new movies by booking through this app. It helps you buy tickets of your favourite movie nearby your area.'
  });
  };
  

/* GET 'signin' page */
module.exports.signin = function(req, res){
    res.render('signin', { title: 'signin' });
    content: 'MovieTime is a website where you can book your favourite movie tickets online without standing in line at the theatres.You can enjoy watching your favourite actor/actress perfrom on screen and watch their new movies by booking through this app.'
  }
  /* GET 'register' page */
  module.exports.register = function(req, res){
    res.render('register', { title: 'register' });
    content:'MovieTime is a website where you can book your favourite movie tickets online without standing lines at theatres.You can enjoy watching your favourite actor/actress perfrom on screen and watch their new movies by booking through this app.'
  }