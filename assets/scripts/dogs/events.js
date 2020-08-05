'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onIndexDogs = () => {
  event.preventDefault()

  api.indexDogs()
    .then(ui.indexDogsSuccess)
    .catch(ui.indexDogsFailure)
}

module.exports = {
  onIndexDogs
}
