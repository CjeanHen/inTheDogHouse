'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onIndexDogs = event => {
  event.preventDefault()

  api.indexDogs()
    .then(ui.indexDogsSuccess)
    .catch(ui.indexDogsFailure)
}

const onShowDog = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.showDog(data)
    .then(ui.showDogSuccess)
    .catch(ui.showDogFailure)
}

const onCreateDog = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createDog(data)
    .then(ui.createDogSuccess)
    .catch(ui.createDogFailure)
}

const onUpdateDog = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.updateDog(data)
    .then(ui.updateDogSuccess)
    .catch(ui.updateDogFailure)
}

const onDeleteDog = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.deleteDog(data)
    .then(ui.deleteDogSuccess)
    .catch(ui.deleteDogFailure)
}

module.exports = {
  onIndexDogs,
  onShowDog,
  onCreateDog,
  onUpdateDog,
  onDeleteDog
}
