import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const App = ({ values, errors, touched, isSubmitting }) => (
  <Form className="pa4 black-90 measure center">
    <div>
      <h2>Sign In Now</h2>
      <p>Unlock awesome features</p>
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div>
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
    </div>
    <label>
      <Field type="checkbox" name="rememberme" checked={values.rememberme} />
      Keep me logged in
      <a href="#">Forgot password?</a>
    </label>

    <button disabled={isSubmitting}>Submit</button>
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
        values.password === "whatup?"
      ) {
        setErrors({ email: "Welcome back, Nigel!" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(App);

export default LoginForm;
