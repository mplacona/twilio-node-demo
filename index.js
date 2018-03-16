const twilio = require('twilio')
const _ = require('lodash')

client = twilio();

client.messages.list({ to: "" }).then(messages => {
    _.uniqBy(messages, 'from').forEach(message => {
        const from = '';
        const to = message.from;
        const url = 'http://mplacona.ngrok.io/voice.xml';

        client.calls.create({ from, to, url });
    });
});


