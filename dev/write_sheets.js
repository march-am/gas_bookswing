export default class BWSheetWriter {
  constructor(books, ss) {
    this.books = books;
    this.ss = ss;
  }

  clearAll() {
    this.books.forEach((book) => {
      try {
        const sheet = this.ss.getSheetByName(book.title);
        if(sheet) { this.ss.deleteSheet(sheet); };
      } catch(e) {
        Browser.msgBox(e);
      }
    });
  }

  output() {
    const HEADER = ['Page', 'Quote', 'Memo'];
    this.books.forEach((book) => {
      try {
        const sheet = this.ss.insertSheet(book.title);
        const rows = this.formatToRows(book.posts);
        rows.unshift(HEADER);
        sheet.getRange(1, 1, rows.length, rows[0].length)
             .setValues(rows);
      } catch(e) {
        Browser.msgBox(e);
      }
    });
  }

  formatToRows(posts) {
    return posts.map((post) => {
      return [post.page, post.quote, post.memo];
    });
  }
};
