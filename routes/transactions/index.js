const express = require('express');
const transactions = require('../../controllers/transactions');
const router = express.Router()

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = await transactions.get(id);
    res.status(200).send(transaction);
  } catch (error) {
    next(error);
  }
})

router.get('/', async (req, res, next) => {
  try {
    const transaction = await transactions.getAll();
    res.status(200).send(transaction);
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newTransaction = await transactions.create(body);
    res.status(201).send(newTransaction);
  } catch (error) {
    next(error);
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedTransaction = await transactions.update(id, body);
    res.status(201).send(updatedTransaction);
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await transactions.delete(id)
    res.status(200).send("deleted");

  } catch (error) {
    next(error)
  }
})

module.exports = router
