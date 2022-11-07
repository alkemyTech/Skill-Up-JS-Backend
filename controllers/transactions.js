const { Transaction } = require("../database/models");
const { endpointResponse } = require("../helpers/success");
const createHttpError = require("http-errors");

//Validation middleware is needed.

const getTransactions = async (req, res, next) => {
  try {
      const response = await Transaction.findAll({where:{deletedAt: null}})
      endpointResponse({
          res,
          message: 'Operacion Exitosa',
          body: response
      })
  } catch (error) {
      const httpError = createHttpError(error.statusCode, `Error retrieving transactions - ${error.message}`)
      next(httpError)
  }
}

const getTransaction = async (req, res, next) => {
  try {
      const response = await Transaction.findByPk(req.params.id)
      if(response){
          endpointResponse({
              res,
              message: 'Operacion exitosa',
              body: response
          })
      }
      else{
          res.status(404).json({error: "Transaction not found", status: 404 })
      }

  } catch (error) {
      const httpError = createHttpError(error.statusCode, `Error retrieving transaction by id - ${error.message}`)
      next(httpError)
  }
}

const createTransaction = async (req, res, next) => {
  try {
    const response = await Transaction.create({
      id: req.body.id,
      amount: req.body.amount,
      description: req.body.description,
      date: req.body.date,
      userId: req.body.userId,
      categoryId: req.body.categoryId,
    });
    if (response) {
      endpointResponse({
        res,
        message: "Operacion exitosa",
        body: response,
      });
    } else {
      res.status(404).json({ error: "Transaction not found", status: 404 });
    }
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `Error creating transaction - ${error.message}`
    );
    next(httpError);
  }
};
// Operation update  controller
const updateTransaction = async (req, res, next) => {
  try {
    const response = await Transaction.update(
      {
        userId: req.body.id,
        amount: req.body.amount,
        date: req.body.date,
        categoryId: req.body.categoryId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (response) {
      endpointResponse({
        res,
        message: "Operacion exitosa",
        body: response,
      });
    } else {
      res.status(404).json({ error: "Update not found", status: 404 });
    }
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `Error updating transaction - ${error.message}`
    );
    next(httpError);
  }
};

// Operation delete controller
const deleteTransaction = async (req, res, next) => {
  try {
    const response = await Transaction.destroy(
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (response) {
      endpointResponse({
        res,
        message: "Operacion eliminada",
        body: response,
      });
    } else {
      res.status(404).json({ error: "Operation not found", status: 404 });
    }
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `Error deleting transaction - ${error.message}`
    );
    next(httpError);
  }
};

module.exports = { getTransactions, getTransaction, createTransaction, updateTransaction, deleteTransaction };
