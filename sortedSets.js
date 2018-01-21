const SortedSets = (redis) => {

    redis.zadd('rockets', 1969, 'apollo 11', 1998, 'Deep space 1', 2008, 'Falcon 1' );

    redis.zrangebyscore('rockets', "-inf", 2000, "withscores",  (err, result) => {
        console.log(result);
    });


};


export default SortedSets;