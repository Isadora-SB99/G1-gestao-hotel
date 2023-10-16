# mevn-crud
This tutorial will guide you on how to create a MEVN app from scratch to production. The app is deployed on [Render](https://render.com/).
Visit this [link](https://mevn-crud.onrender.com/) to see the demo of the app


## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).


## Setup

Clone Repo:
```
git clone https://github.com/isonguyom/mevn-crud.git
```

Enter the root directory:
```
cd mevn-crud
```


### Install dependencies
Install client dependencies:
```
cd client
npm install
```

Install server dependencies
```
cd ../server
npm install
```

Open in VScode:
```
code .
```

Create a `.env` file in the `server` folder and the following:
```
MONGO_URI='<mongdb_uri>'
PORT=3000
```
Add `MONGO_URI` and preferred `PORT` to your `.env` file



## Run in dev:
```
npm run dev
```


## Run in production:
```
npm start
```


## Preview
[preview.webm](https://github.com/isonguyom/mevn-crud/assets/52254145/4325ad81-e4c6-4ae0-a295-7690f0953c7e)
