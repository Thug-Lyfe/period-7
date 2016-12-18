/**
 * Created by marco on 18-12-2016.
 */

var conUrl = "mongodb://localhost/meanseed";
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    conUrl = 'mongodb://'+ process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
};

module.exports = {
    'database': conUrl
};