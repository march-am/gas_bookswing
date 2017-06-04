function main() {
  var label_name = 'bookswing'
  var mails = getMailsWithArray('label:' + label_name)
  var mail = mails[0];
  Logger.log(mail.subject)
  Logger.log(parseBWMailBody(mail.body));
  
  // posts = [
  //   {
  //      quote: String('引用'),
  //       memo: String('メモ'),
  //       page: Number('ページ数')
  //   },
  //   ...
  // ]
}

function getMailsWithArray(query) {
  var threads = GmailApp.search(query);
  var mails = [];
  threads.forEach(function(thread) {
    var msgs = thread.getMessages();
    msgs.forEach(function(msg) {
      mails.push({
        subject: msg.getSubject(),
        body: msg.getBody()
      });
    });
  });
  return mails;
}

function parseBWMailBody(body) {
  var lines = body.split(/\r\n|\r|\n/).slice(3);
  var REG_QUOTE = /^\".+\"$/;
  var REG_BLANK = /^$/;
  var REG_PAGE = /^p\.\d+$/;

  var posts = [];
      posts[0] = { quote: '', memo: '', page: 0 };
  var post_cnt = 0, blank_cnt = 0;

  lines.forEach(function(line) {
    line = line.trim();
    switch(true) {
      case REG_QUOTE.test(line):
        posts[post_cnt].quote = line;
        blank_cnt = 0;
        break;
      case REG_BLANK.test(line):
        if(blank_cnt < 1) {
          blank_cnt += 1;
        } else {
          blank_cnt = 0;
          post_cnt += 1;
          posts[post_cnt] = { quote: '', memo: '', page: 0 };
        }
        break;
      case REG_PAGE.test(line):
        posts[post_cnt].page = parseInt(line.replace(/^p\./, ''));
        blank_cnt = 0;
        break;
      default:
        posts[post_cnt].memo += line + '\n';
        blank_cnt = 0;
        break;
    }
  });
  
  // 最後余分に追加したHashを削除
  if(!posts[post_cnt].page) {
    posts.splice(post_cnt, 1);
  }

  return posts;
}
