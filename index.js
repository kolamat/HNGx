let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate)

newDate.setDate(8);
newDate.setMinutes(29);
console.log(newDate);
setInterval(updateTime, 1000);

function updateTime() {
  Time.innerHTML = new Date();
}