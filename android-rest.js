var caps = require('./config/caps'),
    hosts = require('./config/appium-servers'),
    siteTypes = require('./config/site-types');

var config = require('./config/index'),
    Setter = require('./services/setter'),
    setter = new Setter(config),
    iosRunner = require('./services/runner');

setter.setOs('Android').setTarget(caps.device.nexus5).excludeSites(siteTypes.main);

iosRunner(config);