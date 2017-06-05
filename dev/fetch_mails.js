export default function fetchMailsWithArray(query) {
  const threads = GmailApp.search(query);
  let mails = [];
  threads.forEach((thread) => {
    const msgs = thread.getMessages();
    msgs.forEach((msg) => {
      mails.push({
        subject: msg.getSubject(),
        body: msg.getBody()
      });
    });
  });
  return mails;
};
