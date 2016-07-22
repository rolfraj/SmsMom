module.exports = function (ctx, done) {
  
  var twilioCreds = JSON.parse(ctx.data.TWILIOCREDS);  
  // Twilio Credentials 
  //require the Twilio module and create a REST client 
  var client = require('twilio@2.2.1')(twilioCreds.accountSid, twilioCreds.authToken); 
   
  client.messages.create({ 
    to: twilioCreds.receiver, //"9123567433", 
    from: twilioCreds.sender,  //"+120550345344", 
    body: twilioCreds.message,  //"Hi Mom Left from office",   
    }, function(err, message) { 
      if(err) return done(err);
      //console.log(message.sid); 
      done(null,'Success');
  });

};
