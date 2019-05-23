const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '788414',
  key: 'bd74cea49003ff11f441',
  secret: '1013459c39855f4b2ba7',
  cluster: 'ap2',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});