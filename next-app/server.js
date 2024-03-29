// server.js
const express = require('express')
const next = require('next')
const config = require('./next.config')

const port = parseInt(process.env.PORT, 10) || 3002
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // 设置跨域支持
  server.all('*', (req, res) => {
    res.setHeader('access-control-allow-origin', '*')
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}/`)
  })
})
