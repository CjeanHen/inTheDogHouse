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

const createDog = data => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/dogs',
    method: 'POST',
    data: data
  })
}

const updateDog = data => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/dogs/' + data.dog.id,
    method: 'PATCH',
    data: data
  })
}

const deleteDog = data => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/dogs/' + data.id,
    method: 'DELETE',
    data: data
  })
}

module.exports = {
  indexDogs,
  showDog,
  createDog,
  updateDog,
  deleteDog
}
