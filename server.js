import * as http from 'node:http'

const PORT = 5000

const notification = `
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX as: <http://www.w3.org/ns/activitystreams#>
PREFIX notify: <http://www.w3.org/ns/solid/notifications#>

<urn:uuid:fc8b5af4-bd7e-4fd1-a649-afcbd0e1c083>
  a as:Update ;
  as:object: <https://example.org/guinan/profile> ;
  notify:state "128f-MtYev" ;
  as:published "2021-08-05T01:01:49.550Z"^^xsd:dateTime .
`
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/turtle; charset=UTF-8');
  setInterval(() => {
    res.write(notification);
  }, 1000)
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}` )
});
