var cc = cc || {};

cc.bootstrap = function () {
  var now = new Date();
  var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  var arrival = new Date(2015, 2, 11, 19, 9);

  console.log(arrival);
  console.log(utc);

  var diff = arrival.getTime() / 1000 - utc.getTime() / 1000;

  $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });
};

$(function () {
  cc.bootstrap();
});
