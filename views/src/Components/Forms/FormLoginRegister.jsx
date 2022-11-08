import React, {useState} from "react";
import FormItem from "./components/FormItem";

//ejemplo de component

export const FormLoginRegister = () => {
  const [userValues, setUserValues] = useState({
    name: "",
    email: "",
    password: "",
    isLogin: true,
  });

  const handleChange = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };

  const toggleLogin = () => {
    setUserValues({ ...userValues, isLogin: !userValues.isLogin });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <h3>{userValues.isLogin ? "Ingresar" : "Registrarse"}</h3>
        {!userValues.isLogin && (
          <FormItem
            type="text"
            values={userValues.name}
            name="name"
            labelText="Nombre"
            placeholder="Nombre"
            handleChange={handleChange}
          />
        )}
        <FormItem
          type="email"
          values={userValues.email}
          name="email"
          labelText="Email"
          placeholder="Email"
          handleChange={handleChange}
        />
        <FormItem
          type="password"
          values={userValues.password}
          name="password"
          labelText="Password"
          placeholder="Password"
          handleChange={handleChange}
        />
        <button type="submit">
          {userValues.isLogin ? "Ingresar" : "Crear cuenta"}
        </button>
        <p>
          {userValues.isLogin
            ? "¿No estas registrado?"
            : "Ya tienes una cuenta"}
          <button type="button" onClick={toggleLogin}>
            {userValues.isLogin ? " Crear cuenta" : " Ingresar"}
          </button>
        </p>
      </form>
    </section>
  );
};
