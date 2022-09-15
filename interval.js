var intervalInDays = [[[7, 10],[14, 17]],[[7,10]],[[7, 10],[14, 17]]]
//https://stackoverflow.com/questions/39171291/15-minute-interval-between-two-dates-javascript
function intervals(startString, endString) {
    var start = moment(startString, 'YYYY-MM-DD hh:mm a');
    var end = moment(endString, 'YYYY-MM-DD hh:mm a');

    // round starting minutes up to nearest 15 (12 --> 15, 17 --> 30)
    // note that 59 will round up to 60, and moment.js handles that correctly
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var result = [];

    var current = moment(start);

    while (current <= end) {
        result.push(current.format('YYYY-MM-DD HH:mm'));
        current.add(15, 'minutes');
    }

    return result;
}

console.log(intervals('2016-08-10 4:35:00 PM', '2016-08-10 8:06:00 PM'));
//https://momentjs.com/

// Output:
// [ '2016-08-10 16:45',
//   '2016-08-10 17:00',
//   '2016-08-10 17:15',
//   '2016-08-10 17:30',
//   '2016-08-10 17:45',
//   '2016-08-10 18:00',
//   '2016-08-10 18:15',
//   '2016-08-10 18:30',
//   '2016-08-10 18:45',
//   '2016-08-10 19:00',
//   '2016-08-10 19:15',
//   '2016-08-10 19:30',
//   '2016-08-10 19:45',
//   '2016-08-10 20:00' ]