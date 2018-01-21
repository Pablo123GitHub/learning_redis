const Lists = (redis) => {
    redis.rpush('countries', 'France', 'Italy', 'Germany', 'Spain');

    redis.rpush('countries', 'Portugal');

    redis.lpush('countries', 'Swiss');

   // redis.rpop('countries');

    redis.lrange('countries', 0, -1, (err, result) => {
        console.log(result);
    });

}

export default Lists;


