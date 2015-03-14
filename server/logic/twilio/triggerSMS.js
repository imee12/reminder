var client = require('./client');

var sms = {
  triggerSMS: function(reminder) {
  	return client.sendMessage({
      to: reminder.user.phone,
      from: '+18437799077',
      body: '[Reminder] : ' + reminder.remindThis,
      url: 'http://7c149e33.ngrok.com -> 127.0.0.1:80/call/twiml/' + reminder.user._id + '/' + reminder._id
    }, function(error, response) {
      console.log(error || response);
    });
  }
}

module.exports = sms;

///// url: possibly can just be heroku platform PAAS//// 
