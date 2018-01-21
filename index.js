import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';
import Lists from './lists';
import Sets from './sets';


const redis = new Redis({ password: 'man1234ehd'});

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);


