#!/usr/bin/env node
var bb = require('./bonescript');
var fs = require('fs');
var path = require('path');
var io = require('socket.io');
var eeprom = require('./bonescript/eeprom');

var EepromFiles = {
    '/sys/bus/i2c/drivers/at24/1-0050/eeprom': { type: 'bone' },
    '/sys/bus/i2c/drivers/at24/3-0054/eeprom': { type: 'cape' },
    '/sys/bus/i2c/drivers/at24/3-0055/eeprom': { type: 'cape' },
    '/sys/bus/i2c/drivers/at24/3-0056/eeprom': { type: 'cape' },
    '/sys/bus/i2c/drivers/at24/3-0057/eeprom': { type: 'cape' },
};

setup = function() {
    var onconnect = function(socket) {
        console.log("New client connected");
        
        // send expansion pin info
        socket.emit('muxstruct', bone);

        // send eeprom info
        var eeproms = eeprom.readEeproms(EepromFiles);
        if(eeproms == {}) {
            console.warn('No valid EEPROM contents found');
        } else {
            socket.emit('eeproms', eeproms);
        }
        
        var adcdelay = 1000;
        var adcscale = 1.8/4096;
        var adcfileData = "/sys/devices/platform/tsc/ain7"

        var adcreadData = function(fd) {
            fs.readFile(adcfileData, function(err, data) {
                if(err) throw("Unable to read data: " + err);
                socket.emit('adcdata', "" + Math.round(data * adcscale * 1000)/1000);
            });
            setTimeout(adcreadData, adcdelay);
        };
        
        setTimeout(adcreadData, adcdelay);
        
        // on disconnect
        socket.on('disconnect', function() {
            console.log("Client disconnected.");
        });
        
        // listen for requests and reads the debugfs entry async
        socket.on('listMux', function (pinname, fn) {
            console.log(pinname + ": " + bone[pinname].mux);
            path.exists("/sys/kernel/debug/omap_mux/" + bone[pinname].mux, function (exists) {
                if(exists) {
                    fs.readFile("/sys/kernel/debug/omap_mux/" + bone[pinname].mux, 'utf8', function (err, data) {
                        fn(data, pinname);
                    });
                } else {
                    // default mux
                    console.log(bone[pinname].mux + ": default mux");
                    fn("0", pinname);
                }
            });
        });
    };

    var server = new bb.Server(2012, "ELC2012-koen", onconnect);
    server.name = 'schmux';
    server.begin();
};

bb.run();
