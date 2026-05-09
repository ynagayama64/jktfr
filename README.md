# jktfr

城西川越陸上競技部 記録管理ページへの静的入口ページです。

このリポジトリは、GAS本体の `rikujyo-app` とは完全に別のプロジェクトです。Apps Script、Google認証、DBアクセス、個人情報取得は行いません。

このページは説明ページではなく、LINEやアプリ内ブラウザから Chrome / Safari / Edge などの外部ブラウザへ誘導するための交通整理ページです。

## 役割分離

### jktfr

- 入口ページ
- LINE / Google Classroom などで配布する短いURL
- LINE / アプリ内ブラウザから外部ブラウザへ誘導
- GAS本体への導線
- 記録入力ページを開いた後のホーム画面追加案内

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

## 画面方針

- 生徒がLINEから開く前提で、読む量を少なくしています。
- LINEなどのアプリ内ブラウザを検出した場合は、上部に外部ブラウザ案内を表示します。
- 判定に失敗しても、記録入力ページを開くボタンは常に表示します。
- Google認証や権限管理は入口ページでは行わず、GAS本体側で行います。
- Cookie、localStorage、GAS API呼び出しは使用しません。

## APP_URL の変更場所

GAS本体のURLは `app.js` の先頭にある `APP_URL` を変更してください。

```js
const APP_URL = "https://script.google.com/a/macros/k-josai.com/s/AKfycbw9XmAR5blFNMaDJumlrXpslIJdMNyek8RD_0vdi8ASWSUXsxX9bw9vfhWTaQEMHAltIg/exec";
```

URLを変更する場合は、この定数だけを差し替えます。

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
