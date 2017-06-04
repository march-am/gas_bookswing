// main.js
import { getMailsWithArray, parseBWMailBody } from './parse_mails';

global.main = () => {
  const mails = getMailsWithArray('label:bookswing');
  const books = mails.map((mail) => {
    const [title, author] = mail.subject.split(/ - /);
    const posts = parseBWMailBody(mail.body);
    return {
      author : author,
      title  : title,
      posts  : posts
    }
  });
  Logger.log(books);
};
