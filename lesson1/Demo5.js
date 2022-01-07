var url = require('url');

var adrs='http://localhost:3000/default.html?year=2020%month=March';

var q=url.parse(adrs,true);