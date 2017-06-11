import fetchMailsWithArray from './fetch_mails';
import BWMailParser from './parse_mails';
import BWSheetWriter from './write_sheets';

const FILE_ID = process.env.FILE_ID;
const MAIL_SEARCH_QUERY = 'label:bookswing OR subject: "bw: "';

global.main = () => {
  try {
    const mails = fetchMailsWithArray(MAIL_SEARCH_QUERY);
    const books = mails.map((mail) => {
      return new BWMailParser(mail).formatLines();
    });
    const ss = SpreadsheetApp.openById(FILE_ID);
            // SpreadsheetApp.getActiveSpreadsheet();
    const writer = new BWSheetWriter(books, ss);
    writer.clearAll();
    writer.output();
  } catch(e) {
    Logger.log(e);
  }
};
