var Parser = require('../libs/parser')
var Configuration = require('../libs/configuration')
var Commons = require('../libs/commons')
var Panel = require('../libs/panel')
var Watcher = require('../libs/watcher')
var Database = require('nedb')

global.translate = require('../libs/translate')

require('../libs/logging')

global.watcher = new Watcher()
global.parser = new Parser()
global.configuration = new Configuration()
global.panel = new Panel()

global.client = {}
global.commons = new Commons()

global.client.action = function (owner, text) {
  console.warn('#WARNING: client.action is deprecated ')
}

global.commons.sendMessage = function (text) {
  global.output.push(text)
}

global.commons.timeout = function (user, reason, timeout) {
  global.timeouts.push(user + ': ' + reason + ' ' + timeout)
}

global.botDB = new Database({
  inMemoryOnly: true,
  autoload: true
})

global.output = []
global.timeouts = []

global.log.exitOnError = false

/* users */
global.ownerUser = {username: 'sogehige'}
