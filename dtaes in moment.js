import moment from 'moment';

const birthday = moment('2002-03-18', 'YYYY-MM-DD');

console.log(birthday.fromNow())

console.log(birthday.format('dddd'));

console.log(birthday.format('MMMM Do YYYY'));
