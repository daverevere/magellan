var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function(req, res){


res.sendFile('seville.html', {root:'./'})

})

app.get('/:location', function(req, res){
console.log(req.params.location)

  var locations = ['canary','cape','guam','seville','strait', 'philippines']
  var count= 1
  for (var i=0; i<count;) {
    console.log('something')
      for(var each = 0; each<locations.length; each++){
        console.log('something else')
        if(locations[each]===req.params.location){
          console.log({location:req.params.location, nextlocation:locations[each+1]})
           res.sendFile(req.params.location+'.html', {root : './'}) 
           i++
           return 
       
        }
     

     }
    res.send('Magellan did not travel to ' +req.params.location + ".") 
  }

})






  

//   if(req.params.location === 'error'){
//   next(new Error('test'))
//   }
//   else{
//   res.sendFile(req.params.location+'.html', {root : './'}) 
//   }

// })

// app.use(function(req, res){
// console.log(req.body)
// res.send(req.body)

// })


// app.use(function(req, res, next) {
//   console.log(req.body)
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler



// error handlers

// development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
