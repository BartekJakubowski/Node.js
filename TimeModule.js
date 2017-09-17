var os = require('os');
var uptime = os.uptime();

var sekundy = uptime.toFixed(0);
var godziny = Math.floor(uptime / 3600);
var minuty = Math.floor((uptime - godziny * 3600)/60); 
var sekundyReszta = (sekundy - godziny * 3600 - minuty * 60).toFixed(0);

function TimeModule() {
    console.log('Uptime: ~'.green, godziny, 'godz. ', minuty, 'min. ', sekundyReszta, 'sek.');
};

exports.print = TimeModule;