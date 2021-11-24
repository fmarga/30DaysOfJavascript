//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();

//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log(`${year}-${month}-${day} ${hour}:${minute}`);