<h1 align="center">Chat-Space</h1>

[![Image from Gyazo](https://gyazo.com/17671b9fe1492d7b4a66a3d9e2478e77.jpg)](https://gyazo.com/17671b9fe1492d7b4a66a3d9e2478e77)

## :link: アプリケーションの概要
<ul>
  <li>チャットアプリケーションです。</li>
  <li>個別のグループを作成して、ユーザー同士でチャットをする事ができます。</li>
  <li>非同期通信でメッセージや画像をチャット形式で送信する事ができます。</li>
</ul>

## :globe_with_meridians: 本番環境
<ul>
  <li>IPアドレス : http://176.34.16.226/</li>
</ul>

## :link: アプリケーションの機能
<ul>
  <li>ユーザーの新規登録/ログイン機能</li>
  <li>グループ内でのチャット機能</li>
  <li>複数人によるグループチャット機能</li>
  <li>チャット相手の検索機能</li>
  <li>チャットグループへのユーザー招待機能</li>
  <li>チャットの履歴表示機能</li>
  <li>画像送信機能</li>
  <li>チャットの自動更新</li>
</ul>

## :link: 開発環境

<p align="center">
  <a href="https://www.ruby-lang.org/ja/"><img src="https://user-images.githubusercontent.com/39142850/71774533-1ddf1780-2fb4-11ea-8560-753bed352838.png" width="45px;" /></a>
  <a href="https://railsguides.jp/getting_started.html"><img src="https://y-hilite.com/wp-content/uploads/2018/02/rails_logo.png" height="45px;" /></a>
  <a href="http://haml.info/"><img src="https://user-images.githubusercontent.com/39142850/71774618-b32edb80-2fb5-11ea-9050-d5929a49e9a5.png" height="45px;" /></a>
  <a href="https://sass-lang.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/144px-Sass_Logo_Color.svg.png" height="40px;" /></a>
  <a href="https://jquery.com/"><img src="https://user-images.githubusercontent.com/66232530/88712858-58c5ba00-d155-11ea-9314-fa1a6d3442fc.png" height="50px;" /></a>
  <a href="https://github.co.jp/"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="45px;" /></a>
  <a href="https://aws.amazon.com/jp/"><img src="https://d0.awsstatic.com/logos/powered-by-aws.png" height="45px;" /></a>
</p>

## :computer: インストール方法
1.このリポジトリを複製
$ git clone https://github.com/karajan-37458/Chat-Space.git

2.インストールしたリポジトリに移動
$ cd Chat-Space

3.gemをアプリケーションに適用
$ bundle install

4.DBの作成&反映
$ rails db:create
$ rails db:migrate

5.アプリケーションの起動
$ rails s
👉 http://localhost:3000

## :link: DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index: true|
|email|string|null: false, unique: true|
### Association
- has_many :groups_users
- has_many :groups, through: groups_users
- has_many :messages


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to group
- belongs_to user


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
### Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: groups_users


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
