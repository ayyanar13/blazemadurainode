var CONFIG = {};
CONFIG.ENV = (process.env.NODE_ENV || 'development');
CONFIG.PORT = (process.env.VCAP_APP_PORT || 3000);
CONFIG.DB_URL = 'mongodb://' + '192.168.1.254' + ':' + '27044' + '/' + 'development';

export { CONFIG };