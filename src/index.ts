import express from 'express';
import jounralEntryRouter from './routes/journalEntries';

const app = express()
const port = 8000

app.use(express.json());
app.use('/journal/entries', jounralEntryRouter);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening at http://localhost:${port}`)
})