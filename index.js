import Redis from 'ioredis';
import Strings from './strings';

const redis = new Redis({ password: 'man1234ehd'});

Strings(redis);

