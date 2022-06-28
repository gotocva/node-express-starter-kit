// imported local packages
import { http, io } from './config/server';
import { config } from './config/index';
import connect from './config/mongoose.connection';
import startNgRokServer from './utils/ngrok';
import { socketInit } from './utils/socket.io-helper';

// start socket.io server
socketInit();

// establish mongodb connection
connect();

// start ngrok server
if (config.ENV.NGROK_AUTH_TOKEN) startNgRokServer(config.PORT, config.ENV.NGROK_AUTH_TOKEN);

// start http server
http.listen(config.PORT, () => { console.log(`app running on port ${config.PORT}`); });