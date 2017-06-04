const getMailsWithArray = (query) => {
  const threads = GmailApp.search(query);
  let mails = [];
  threads.forEach(function(thread) {
    const msgs = thread.getMessages();
    msgs.forEach(function(msg) {
      mails.push({
        subject: msg.getSubject(),
        body: msg.getBody()
      });
    });
  });
  return mails;
};

const parseBWMailBody = (body) => {
  const lines = body.split(/\r\n|\r|\n/).slice(3);
  const REG_QUOTE = /^\".+\"$/;
  const REG_BLANK = /^$/;
  const REG_PAGE = /^p\.\d+$/;

  let posts = [];
      posts[0] = { quote: '', memo: '', page: 0 };
  let post_cnt = 0, blank_cnt = 0;

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
};

export { getMailsWithArray, parseBWMailBody };