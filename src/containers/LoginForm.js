import React from "react";
import "./LoginForm.scss";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const App = ({ values, errors, touched, isSubmitting }) => (
  <Form className="login__form__container pa4 black-90 measure center">
    <div>
      <h2 className="login__form--header">Sign In Now</h2>
      <p className="login__form--sub-header">Unlock awesome features!</p>
      {touched.email && errors.email && (
        <p className="login__form__error--text">{errors.email}</p>
      )}
      <Field
        className="login__form--text-field"
        type="email"
        name="email"
        placeholder="Email"
      />
    </div>
    <div>
      {touched.password && errors.password && (
        <p className="login__form__error--text">{errors.password}</p>
      )}
      <Field
        className="login__form--text-field"
        type="password"
        name="password"
        placeholder="Password"
      />
    </div>
    <label className="login__form__remember__me--label">
      <Field type="checkbox" name="rememberme" checked={values.rememberme} />
      <span className="checkmark" />
      <p className="login__form__remember__me--text">Keep me logged in</p>
      <a
        className="login__form__forgot-password"
        href="https://www.carrefourmyclub.com/ForgotPassword.aspx"
        target="_blank"
        rel="noopener noreferrer"
      >
        Forgot password?
      </a>
    </label>

    <button
      className="login__form__submit-btn"
      disabled={isSubmitting}
      type="submit"
    >
      Sign In
    </button>
  </Form>
);

const LoginForm = withFormik({
  mapPropsToValues({ email, password, rememberme }) {
    return {
      email: email || "",
      password: password || "",
      rememberme: rememberme || false
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (
        values.email === "nigelmarshal@gmail.com" &&
        values.password === "testing123"
      ) {
        setErrors({ email: "Welcome back, Nigel!" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 1000);
  }
})(App);

export default LoginForm;
