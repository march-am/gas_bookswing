export default function fetchMailsWithArray(query) {
  const THREADS = GmailApp.search(query);
  let mails = [];
  THREADS.forEach((thread) => {
    const MSGS = thread.getMessages();
    MSGS.forEach((msg) => {
      mails.push({
        subject: msg.getSubject(),
        body: msg.getBody()
      });
    });
  });
  return mails;
};
