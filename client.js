import { TextDecoderStream } from 'node:stream/web'

const URL = 'http://localhost:5000/'

const response = await fetch(URL)
console.log(response.headers.get('Content-Type'))

const textStream = response.body.pipeThrough(new TextDecoderStream());
for await (const notificationText of textStream) {
  console.log(notificationText)
}