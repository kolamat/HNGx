let newDate = new Date();

const currentDay = document.getElementById('dayOfWeek');

currentDay.innerHTML = newDate.toDateString().substring(0, 3);

const utcTime = document.getElementById('currentUTCTime');

utcTime.innerHTML = new Date().getUTCMilliseconds();

