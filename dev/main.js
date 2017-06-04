// main.js
import { getMailsWithArray, parseBWMailBody } from './parse_mails';

global.main = () => {
  const label_name = 'bookswing';
  const mails = getMailsWithArray('label:' + label_name);
  const mail = mails[0];
  const books = mails.map((mail) => {
    const [title, author] = mail.subject.split(/ - /);
    const body = parseBWMailBody(mail.body);
    return {
      author : author,
      title  : title,
      body   : body
    }
  });
  Logger.log(books);

  // posts = [
  //   {
  //      quote: String('引用'),
  //       memo: String('メモ'),
  //       page: Number('ページ数')
  //   },
  //   ...
  // ]
};
