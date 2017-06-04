// main.js
import { getMailsWithArray, parseBWMailBody } from './parse_mails';

global.main = () => {
  const label_name = 'bookswing';
  const mails = getMailsWithArray('label:' + label_name);
  const mail = mails[0];
  Logger.log(mail.subject);
  Logger.log(parseBWMailBody(mail.body));

  // posts = [
  //   {
  //      quote: String('引用'),
  //       memo: String('メモ'),
  //       page: Number('ページ数')
  //   },
  //   ...
  // ]
};
