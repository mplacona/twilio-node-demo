import twilio from 'twilio';
import { uniqBy } from 'lodash';

client = twilio();

client.messages.list({ to: "" }).then(messages => {
    uniqBy(messages, 'from').forEach(message => {
        const from = '';
        const to = message.from;
        const url = 'http://mplacona.ngrok.io/voice.xml';

        client.calls.create({ from, to, url });
    });
});