const TronWeb = require('tronweb');
const privateKeyToAddress = require('ethereum-private-key-to-address');
const tronWeb = new TronWeb(
  'http://127.0.0.1:9090',
  'http://127.0.0.1:9090',
  'http://127.0.0.1:9090',
  'd6fbbf6eecffdb32172e391363a401f89617acb9dd01897b9fa180830a8a46b2',
);

function privateKeyToTronAddress(inputString) {
    var ethadddress=privateKeyToAddress(inputString);
    const addressInHexFormat = ethadddress.replace('0x', '41');
    const addressInBase58 = tronWeb.address.fromHex(addressInHexFormat);
    //console.log(ethadddress , addressInBase58);
    return addressInBase58;
};
    
module.exports = {privateKeyToTronAddress}