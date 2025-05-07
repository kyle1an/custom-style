module.exports = { 
  install(less, pluginManager, functions) {
    functions.add('pi', ()=> Math.PI)
  },
}
