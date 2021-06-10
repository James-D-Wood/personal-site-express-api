import { InsertOneWriteOpResult } from "mongodb";
import { JournalEntryData } from "../types/journalEntries";
import { journalEntryCollection } from "./common";

interface JournalEntryModel {
    all: (
        next: (data: JournalEntryData[], err: any) => void
    ) => void,
    get: (
        title: string,
        next: (data: JournalEntryData, err: string) => void
    ) => void,
    create: (
        entry: JournalEntryData,
        next: (data: JournalEntryData, err: string) => void
    ) => void,
}

const model: JournalEntryModel = {
    all: (next) => {
        console.log("Fetching all journal entries");
        const cursor = journalEntryCollection.find({});
        cursor.toArray()
            .then((results: JournalEntryData[]) => {
                next(results, null);
            });
    },
    get: (title, next) => {
        console.log(`Fetching journal entry ${title}`);
        journalEntryCollection.findOne({ title })
            .then((result: JournalEntryData) => {
                next(result, null);
            })
            .catch((reason: string) => {
                next(null, reason);
            });
    },
    create: (entry, next) => {
        console.log("Creating a Journal Entry");
        journalEntryCollection.insertOne(entry)
            .then((result: InsertOneWriteOpResult<any>) => {
                console.log("after insert");
                console.log(result);
                next(result.ops[0], null);
            })
            .catch((reason: Error) => {
                next(null, reason.toString());
            });
    },
};

export default Object.freeze(model);