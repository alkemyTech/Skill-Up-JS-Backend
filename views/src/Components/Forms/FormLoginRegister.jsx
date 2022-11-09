import React, {useState} from "react";
import FormItem from "./components/FormItem";
import { useAuth } from "../../hooks/useAuth";
import { inputLogin, inputSchema } from "./components/validateSchema";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";


const FormLoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const onSubmit = (values, actions) => {
    // logica para consumir los endpoints register y login
    if (isLogin) {
      auth
        .signIn(values.email, values.password)
        .then(console.log("logueado"))
        .catch((error) => {
          console.log(error);
        });
         navigate("/dashboard")

    } else {
      createUser(values);
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={ isLogin ? inputLogin : inputSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <h3>{isLogin ? "Ingresar" : "Registrarse"}</h3>
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
          <button  type="submit" disabled={props.isSubmitting}>
            {isLogin ? "Ingresar" : "Crear cuenta"}
          </button>
          <p>
            {isLogin ? "¿No estas registrado? " : "Ya tienes una cuenta "}
            <button type="button" className="login-btn" onClick={toggleLogin}>
              {isLogin ? " Crear cuenta" : " Ingresar"}
            </button>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default FormLoginRegister;
