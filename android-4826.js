'use strict';
const caps = require('./config/caps');
const hosts = require('./config/appium-servers');
const siteTypes = require('./config/site-types');

const config = require('./config/index');
const Setter = require('./services/setter');
const iosRunner = require('./services/runner');

let setter = new Setter(config);

setter
  .setOs('Android')
  .setTarget(caps.device.mi_4i)
  .setHost(hosts.local.mac4826);

iosRunner(config);