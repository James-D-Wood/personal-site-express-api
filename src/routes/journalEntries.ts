import { Router } from 'express';
import { JournalEntriesDTO } from '../types/journalEntries';
import { v4 as uuidv4 } from 'uuid';
import marked from 'marked';
const router = Router()

// GET: all dev journal entries
router.get('/', (req, res) => {
  // DUMMY PLACEHOLDER
  const payload: JournalEntriesDTO = {
    data: [
      {
        id: uuidv4(),
        title: 'title-1',
        timestamp: Date.now(),
        description: 'A description',
        mdBody: '## Getting Started\nWhen getting started with markdown consider this.',
        htmlBody: marked('## Getting Started\nWhen getting started with markdown consider this.'),
      },
      {
        id: uuidv4(),
        title: 'title-2',
        timestamp: Date.now(),
        description: 'A description',
        mdBody: '## Getting Started\nWhen getting started with markdown consider this.',
        htmlBody: marked('## Getting Started\nWhen getting started with markdown consider this.'),
      },
      {
        id: uuidv4(),
        title: 'title-3',
        timestamp: Date.now(),
        description: 'A description',
        mdBody: '## Getting Started\nWhen getting started with markdown consider this.',
        htmlBody: marked('## Getting Started\nWhen getting started with markdown consider this.'),
      }
    ]
  };
  res.json(payload);
})

export default router;
