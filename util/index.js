const { networkInterfaces } = require('os');

/**
 * 获取当前 IP 地址
 */
function getIPAdress() {
    var interfaces = networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
// function getIPAddress(){

const IPAdress = getIPAdress();

module.exports = {
  IPAdress
};
