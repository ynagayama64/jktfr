# jktfr

城西大川越陸上部 記録管理アプリの静的入口ページです。

このリポジトリは、GAS本体の `rikujyo-app` とは完全に別のプロジェクトです。Apps Script、Google認証、DBアクセス、個人情報取得は行いません。

## 役割分離

### jktfr

- 入口ページ
- LINE / Google Classroom などで配布する短いURL
- アプリ内ブラウザ対策の案内
- GAS本体への導線
- ホーム画面追加の案内

### rikujyo-app

- Google認証
- 権限管理
- 記録入力
- ランキング表示
- DB操作

## ファイル構成

- `index.html`: 画面本体
- `style.css`: デザイン
- `app.js`: アプリ内ブラウザ判定とGAS本体URL
- `README.md`: 公開手順と運用メモ

## APP_URL の変更場所

GAS本体のURLは `app.js` の先頭にある `APP_URL` を変更してください。

```js
const APP_URL = "https://script.google.com/macros/s/XXXXX/exec?view=record_input";
```

`XXXXX` を実際のApps ScriptデプロイURLに差し替えます。

## GitHub Pages 公開手順

1. GitHubで `jktfr` リポジトリを作成します。
2. このフォルダのファイルをGitHubへpushします。
3. GitHubのリポジトリ画面で `Settings` を開きます。
4. 左メニューの `Pages` を開きます。
5. `Build and deployment` の `Source` を `Deploy from a branch` にします。
6. `Branch` を `main`、フォルダを `/ (root)` にして保存します。
7. 表示されたGitHub PagesのURLをLINEやGoogle Classroomで配布します。

## push方法

初回の例です。GitHub上のリポジトリURLは実際のものに変更してください。

```bash
git add index.html style.css app.js README.md
git commit -m "Create static entrance page"
git branch -M main
git remote add origin https://github.com/USER/jktfr.git
git push -u origin main
```

2回目以降は通常どおり変更をpushします。

```bash
git add .
git commit -m "Update entrance page"
git push
```

## 注意

- この入口ページではGoogle認証を行いません。
- GAS APIは呼びません。
- `users_master` は参照しません。
- 個人情報は取得しません。
- CookieやlocalStorageは使用しません。
- 権限管理はGAS本体の `rikujyo-app` 側で行います。
