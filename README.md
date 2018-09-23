# Twilio 5 minute demo

## Running
- If you're running this for the first time, clone then repo and run `npm install`
- To start the server run `npm start`

## Preparation
- Check it's running by heading to [http://localhost:3000](http://localhost:3000)
- start ngrok on that port `ngrok http 3000`
- Open a new tab on [http://zzzzz.ngrok.io/message.xml](http://zzzzz.ngrok.io/message.xml)
- Have your [Twilio Numbers Page](https://www.twilio.com/console/phone-numbers/incoming) open on a separate tab.

## Demoing
- Explain how Twilio and webhooks work
- Head to the numbers page and buy a number
- Configure the Messaging part
- Show that you haven't creted that app yet
- Code `message.xml`
- Prompt people to text your number
- Show that you could also have coded something like a conference call. Code `voice.xml`
- Conflict!
- Code up `index.js`
- run `node index.js`