const URL = 'http://localhost:5000/'

const response = await fetch(URL)
console.log(response.headers.get('Content-Type'))

const reader = response.body.getReader()
const decoder = new TextDecoder()
reader.read().then(function handle({ done, value }) {
  console.log(decoder.decode(value))
  return reader.read().then(handle)
})