var IoTDevice = require ('./device/device.js');

/* Edit these lines to reflect your IoT platform config. */
const ORG_ID = "cl3hm5";
const ACCESS_TOKEN = "secure_token_ibm";
var device = new IoTDevice(ORG_ID, ACCESS_TOKEN);

setInterval(() => Transmit(), 10000);
function Transmit() {
  /* This pushes / publishes data to Watson IoT*/
  device.Push('getCurrentMessage');
}
