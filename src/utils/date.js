var moment = require('moment');


export default function formatUnixToTimestamp(date) {
    return moment(date).format('HH:mm:ss');
}