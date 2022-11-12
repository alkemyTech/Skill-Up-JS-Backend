import React, { useState } from "react";
import FormItem from "./components/FormItem";
import { inputTransaction } from "./components/validateSchema";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createTransactions } from "../../redux/features/transaction/transactionGetSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormTransaction = () => {
  const [selectedCategory, setSelectedCategory] = useState('User-transfer')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryChange = (event) => {
    setSelectedCategory(event.target.value)
  };

  const onSubmit = async (values, actions) => {
    const newOp = {...values, category: selectedCategory}
    const rta = await dispatch(createTransactions(newOp));
    if (rta.status === 201) {
      Swal.fire("Successfully transaction", undefined, 'success')
      setTimeout(() => navigate('/dashboard'), 2000);
    } else {
      Swal.fire(`(${rta.status})  ${rta.data.message}`, undefined, 'error')
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <Formik
        initialValues={{ amount: "", concept: "", email: "" }}
        validationSchema={inputTransaction}
        onSubmit={onSubmit}
        className="flex flex-row items-center justify-center lg:justify-start"
      >
        {(props) => (
          <Form>
            <h3 className="text-2xl font-bold text-center">
              Nueva transferencia
            </h3>
            <>
              <FormItem
                classLabel="block mt-3"
                labelText="Amount:"
                classInput="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="number"
                name="amount"
                placeholder="0"
              />
              <FormItem
                classLabel="block mt-3"
                labelText="Concept:"
                classInput="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="text"
                name="concept"
                placeholder="Concept"
              />
            </>
            <label className="block mt-3">Category</label>
            <select
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="category"
              value={selectedCategory}
              onChange={ (event) => categoryChange(event) }
            >
              <option value="Expense">Expense</option>
              <option value="User-transfer">User-transfer</option>
            </select>
            <FormItem
              classLabel="block mt-3"
              labelText="Email:"
              classInput="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="email"
              type="email"
              placeholder="email"
            />
            <button
              type="submit"
              className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormTransaction;
