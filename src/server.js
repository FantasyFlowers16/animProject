'use strict';
 
const Pusher = require('pusher');
 
var pusher = new Pusher({
    appId: '530620',
    key: 'b534d4fac76717b9872e',
    secret: 'f84f62e45f82cc09b8c8',
    cluster: 'us2',
    encrypted: true
});