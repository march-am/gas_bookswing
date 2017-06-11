# Google App Script for BooksWing

## summary

1. [BooksWing](http://www.bookswing.com/)で読書メモを溜める
1. 読書データを、タイトルに"bw:"と入れたメールで自分のGmailアドレスに送る（「メールで送ること」）
1. GASで実行すると本ごとにシートが作成され、メモがインポートされる

## setting

1. `git clone`
1. `npm install`
1. GoogleDrive上に新規スプレッドシートを作成
1. `./.env`を作り`'FILE_ID=スプレッドシートID'`と書く
1. [Google Apps Scriptの開発をモダンに行う方法 \- Speee DEVELOPER BLOG](http://tech.speee.jp/entry/2016/04/28/190236)を見て `gapps init `、`gapps.config.json`を生成する
1. `webpack`
1. GAS上で実行
