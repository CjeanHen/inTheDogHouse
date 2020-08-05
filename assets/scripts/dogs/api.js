'use strict'

const config = require('../config')
const store = require('../store')

const indexDogs = () => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/dogs',
    method: 'GET'
  })
}

const showDog = data => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/dogs/' + data.id,
    method: 'GET'
  })
}

module.exports = {
  indexDogs,
  showDog
}
