import Redis from 'ioredis';

const redis = new Redis({ password: 'man1234ehd'});

redis.set('name', 'Pablo ', 'EX', 5);
redis.get('name', (err, result)=> {
    console.log(result);
} );




redis.get('address', (err, result)=> {
    console.log(result);
} );

redis.incrby('address', 456);

redis.mset('country', 'Italy', 'continent', 'Europe');

redis.mget('country', 'continent', (err, result) => {
    console.log(result);
});