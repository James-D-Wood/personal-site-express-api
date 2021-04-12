import express from 'express';

const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening at http://localhost:${port}`)
})