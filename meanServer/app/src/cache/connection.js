var redisClient = require('redis-connection')();
redisClient.set('CampanhaCRM', 'SuperBonus');
redisClient.get('CampanhaCRM', function (err, reply ) {
    console.log('CampanhaCRM' , reply.toString());
});