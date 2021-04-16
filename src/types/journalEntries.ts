export interface JournalEntryData {
  _id?: string,
  id: string,
  title: string,
  timestamp: number,
  description: string,
  mdBody: string,
  htmlBody: string,
}

export interface JournalEntryDTO {
  data: JournalEntryData,
}

export interface JournalEntriesDTO {
  data: JournalEntryData[],
}