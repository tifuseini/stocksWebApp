var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 8181});
var uuid = require('node-uuid'),
   _     = require('lodash')._;

var stocks = {
    "AAPL": 95.0,
    "MSFT": 50.0,
    "AMZN": 300.0,
    "GOOG": 550.0,
    "YHOO": 35.0,
    "FB": 75.0
};


var stockUpdater;
var randomStockUpdater = function(){
    for (var symbol in stocks){
        if(stocks.hasOwnProperty(symbol)){
            var randomized

        }
    }
}
