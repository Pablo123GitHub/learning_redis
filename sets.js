const Sets = (redis) => {
    redis.sadd('groceries', 'grapes', 'banana', 'oranges', 'strawberries', 'notVeggie stuff');
    // redis.smembers('groceries', (err, result) => {
    //     console.log(result);
    // });

    redis.sadd('groceries', 'cauliflower', 'brocoli', 'lettuce')

    redis.smembers('groceries', (err, result)=> {
        console.log('GROCERIES SET', result);
    });

    redis.sismember('groceries', 'brocoli',  (err, result) => {
       console.log('Is brocoli part of the grocerylist', result == 1 ? ': Yes': 'no');
    });

    redis.sismember('groceries', 'Almonds',  (err, result) => {
        console.log('Are Almonds part of the grocerylist', result == 1 ? ': Yes': ': NO');
});

    redis.sadd('groceries:meat', 'beef', 'chicken', 'pork');

    redis.smembers('groceries:meat', (err, result) => {
       console.log(result);
    });

    redis.smembers('groceries', (err, result) => {
        console.log(result);
});

    redis.sunionstore('groceries:notVeggie stuff', 'groceries:meat');

    redis.smembers('groceries:notVeggie stuff', (err, result)=> {
        console.log('not veggie stuff', result);
    })
    redis.smembers('groceries:meat', (err, result)=> {
        console.log('MEAT', result);
})

    redis.spop ('groceries:notVeggie stuff' );
    redis.smembers('groceries:notVeggie stuff', (err, result)=> {
        console.log('not veggie stuff', result);
});

    redis.scard('groceries', (err, result)=> {
        console.log(result);
    });
    redis.smembers('groceries', (err, result) => {
        console.log(result);
});

};

export default Sets;