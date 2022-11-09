import React, { useState } from "react";
import FormItem from "./components/FormItem";
import { useAuth } from "../../hooks/useAuth";
import { inputLogin, inputSchema } from "./components/validateSchema";
import { Form, Formik } from "formik";
import { createUser } from "../../redux/features/users/usersGetSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormLoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const onSubmit = (values, actions) => {
    // logica para consumir los endpoints register y login
    console.log(values);
    if (isLogin) {
      auth
        .signIn(values.email, values.password)
        .then(console.log("logueado"))
        .catch((error) => {
          console.log(error);
        });
      navigate("/dashboard");
    } else {
      dispatch(createUser(values));
    }

    actions.resetForm();
  };

  return (
    <section className="flex items-center justify-center min-h-[80vh] bg-gray-100">
      <Formik
        initialValues={{ name: "", lastName: "", email: "", password: "" }}
        validationSchema={isLogin ? inputLogin : inputSchema}
        onSubmit={onSubmit}
        className="flex flex-row items-center justify-center lg:justify-start"
      >
        {(props) => (
          <Form>
            <h3 className="text-2xl font-bold text-center">
              {isLogin ? "Ingresar" : "Registrarse"}
            </h3>
            {!isLogin && (
              <>
                <FormItem
                  labelText="Nombre:"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                />
                <FormItem
                  labelText="Apellido:"
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                />
              </>
            )}
            <FormItem
              labelText="Email:"
              name="email"
              type="email"
              placeholder="email"
            />
            <FormItem
              labelText="Pasword:"
              name="password"
              type="password"
              placeholder="password"
            />
            <button
              type="submit"
              disabled={props.isSubmitting}
              className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {isLogin ? "Ingresar" : "Crear cuenta"}
            </button>
            {isLogin ? "Ingresar" : "Crear cuenta"}
            <p>
              {isLogin ? "¿No estas registrado? " : "Ya tienes una cuenta "}
              <button
                type="button"
                onClick={toggleLogin}
                className="mt-2 text-teal-500"
              >
                {isLogin ? " Crear cuenta" : " Ingresar"}
              </button>
            </p>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormLoginRegister;
