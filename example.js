require('colors')
var moment = require('moment')

module.exports = function() {
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a').toString().green)
}