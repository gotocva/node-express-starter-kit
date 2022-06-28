import ngrok from 'ngrok';

/**
 * 
 * @param {string} port 
 * @param {string} token 
 */
const startNgRokServer = async(port, token) => {
    const ngrokParams = {
        addr: port,
        authtoken: token,
    }
    const url = await ngrok.connect(ngrokParams);
    console.log(`\nngrok url : ${url}`);
}

module.exports = startNgRokServer;