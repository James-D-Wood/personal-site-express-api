interface JournalEntryData {
  id: string,
  title: string,
  timestamp: number,
  description: string,
  mdBody: string,
  htmlBody: string,
}

export interface JournalEntriesDTO {
    data: JournalEntryData[]
}