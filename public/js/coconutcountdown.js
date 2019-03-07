var cc = cc || {};

cc.bootstrap = function () {
  var months = {
    JANUARY: 0,
    FEBRUARY: 1,
    MARCH: 2,
    APRIL: 3,
    MAY: 4,
    JUNE: 5,
    JULY: 6,
    AUGUST: 7,
    SEPTEMBER: 8,
    OCTOBER: 9,
    NOVEMBER: 10,
    DECEMBER: 11
  };

  var now = new Date();
  var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  var arrival = new Date(2019, months.APRIL, 3, 8, 30);

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
