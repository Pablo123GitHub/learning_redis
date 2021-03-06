## Learning Redis

Following a [Lynda.com tutorial](https://www.lynda.com/Redis-tutorials/Learning-Redis/642501-2.html) to
learn the basics of Redis.

## Technology:  

- Node JS
- NPM ([ioredis](https://github.com/luin/ioredis) package for node js)
- [Redis](https://redis.io/)
- ES6 Javascript

## To get started

Open a terminal window and navigate to a convenient location in your local computer, then type in terminal :

```
git clone https://github.com/Pablo123GitHub/learning_redis.git
cd learning_redis
npm install
npm start
```

If the redis server is installed and running in your local machine, you will see lists, sets, ordered sets and hashes
displayed on Terminal. Those are examples testing the basic redis syntax using ioredis (in Node JS ).

Also please note that the password used in index.js needs to be the same  as the one that you use in your local redis configuration file : redis.conf (requirepass).
