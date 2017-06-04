import fetchMailsWithArray from './fetch_mails';
import BWMailParser from './parse_mails';

global.main = () => {
  const mails = fetchMailsWithArray('label:bookswing');
  const books = mails.map((mail) => { return new BWMailParser(mail).formatLines() });
  Logger.log(books);
};
