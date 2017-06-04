# Google App Script for BooksWing

## 説明

1. [BooksWing](http://www.bookswing.com/)で読書した本のメモを溜める
1. 読書データをメールで自分のGmailアドレスに送る（「メールで送ること」）
1. 受信したメールに'*bookswing*'という名前のラベルを付ける（抽出クエリはよしなに）
1. GASで実行するとパースしたObjectが返ってくる

## フォーマット

```javascript
books = [
  {
    author: String('author'),
     title: String('title'),
     posts: {
      quote: String('引用'),
       memo: String('メモ'),
       page: Number('ページ数')
    }
  },
  //...
]
```
