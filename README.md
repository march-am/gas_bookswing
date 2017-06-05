# Google App Script for BooksWing

## summary

1. [BooksWing](http://www.bookswing.com/)で読書した本のメモを溜める
1. 読書データをメールで自分のGmailアドレスに送る（「メールで送ること」）
1. 受信したメールに'*bookswing*'という名前のラベルを付ける（抽出クエリはよしなに）
1. GASで実行すると本ごとにシートが作成され、メモがインポートされる

## setting

1. `git clone`
1. `npm install`
1. GoogleDrive上に新規スプレッドシートを作成
1. `dev/main.js`の`'YOUR SPREADSHEET FILE ID'`を埋める
1. [Google Apps Scriptの開発をモダンに行う方法 \- Speee DEVELOPER BLOG](http://tech.speee.jp/entry/2016/04/28/190236)を見て `gapps init `
1. `webpack`
1. GAS上で実行
