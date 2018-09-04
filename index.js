/**
 * initialize a simple http server for test
 */

const http = require('http')
const port = 3000

console.log('test travis auto build')

const requestHandler = (request, response) => {
  response.end('Hello world')
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
  if (err) {
    return console.log('err:' + err)
  }
  console.log(`server is listening on ${port}`)
})