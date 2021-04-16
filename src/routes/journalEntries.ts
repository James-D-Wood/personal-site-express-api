import e, { Router } from 'express';
import { JournalEntriesDTO, JournalEntryData, JournalEntryDTO } from '../types/journalEntries';
import JournalEntryModel from '../models/journalEntries';
import { ErrorDTO } from '../types/errorDTO';
const router = Router()

router.route('/')
  // GET: all dev journal entries
  .get((req, res) => {
    // TODO: remove
    res.append('Access-Control-Allow-Origin',  '*');
    JournalEntryModel.all((entries: JournalEntryData[]) => {
      const payload: JournalEntriesDTO = {
        data: entries,
      };
      res.json(payload);
    });
  })
  // POST: create a dev journal entries
  .post((req, res) => {
    console.log(req.body);
    JournalEntryModel.create(req.body.data, (result: JournalEntryData, err: string) => {
      if (err) {
        const payload: ErrorDTO = {
          message: err
        };
        res.status(500).json(payload);
      } else {
        const payload: JournalEntryDTO = {
          data: req.body.data
        };
        res.json(payload);
      }
    });
  });


// GET: a dev journal entry by title
router.get('/:title', (req, res) => {
  res.append('Access-Control-Allow-Origin',  '*');
  JournalEntryModel.get(req.params.title, (entry: JournalEntryData, err: string) => {
    if (entry) {
      const payload: JournalEntryDTO = {
        data: entry,
      };
      res.json(payload);
    } else if (err) {
      const payload: ErrorDTO = {
        message: err
      };
      res.status(500).json(payload);
    } else {
      const payload: ErrorDTO = {
        message: "Entry not found",
      }
      res.status(404).json(payload);
    }
  });
})

export default router;
