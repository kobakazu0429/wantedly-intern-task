# wantedly-intern-task

[![Netlify Status](https://api.netlify.com/api/v1/badges/dae8a52d-c047-4afc-a893-1c09f4c64d61/deploy-status)](https://app.netlify.com/sites/wantedly-intern-task/deploys)

## How to dev

### Setup

```bash
# ... Setup node and yarn
$ git clone git@github.com:kobakazu0429/wantedly-intern-task.git
$ cd wantedly-intern-task
$ yarn install
```

### Commands

```bash
# written in package.json
$ yarn dev   # Start webpack-dev-server
$ yarn build # Build to dist/
$ yarn lint  # Check type and syntax
```

## Tasks

### 5. 最もあったら嬉しいと思う機能を一つ以上追加してください

- PWA 化

### 6. なぜその機能を追加したのかを説明してください

- モバイルフレンドリーを目指してフルスクリーンにしたかったからです。
  Web アプリケーションを作ると、上部にアドレスバーなどが出てしまい、手が触れてしまったりするのが煩わしく思うことがありました。それを無くしたかったからです。

- また、以前に ToDo リストを作成したときには、MySQL に保存するようにしていたので、今まで試したことがないものを作りたかったのと、これから IndexedDB などにデータを保存したり、保存したデータを外部 DB にオンライン時にバックアップ・共有できるようにしたり、期限を設定し、通知を送れるようにしたいので、その基盤を整えたいと思ったからです。
