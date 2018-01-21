const Hashes = (redis) => {
    redis.hmset('user:450', 'firstName', 'John', 'lastName', 'McEnroe');
    redis.hmset('user:450', 'Tshirts', 10, 'Trousers', 10);
    redis.hincrby('user:450', 'Tshirts', 1);
    redis.hincrby('user:450', 'Trousers', 23 );

    redis.hgetall('user:450', (err, result) => {
        console.log(result);
    });
}

export default Hashes;