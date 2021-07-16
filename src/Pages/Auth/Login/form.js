import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Validations from "../../../utils/validations";
import CustomInput from "../../../Components/CustomInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import loginLog from "../../../Images/loginlog.png"


export default function FormGroup({ submitFunc }) {
  let valitadionSchema = Yup.object().shape({
    email: Validations.email,
  });



  return (
    <div className={styles.formGroup}>
      <Formik
        validationSchema={valitadionSchema}
        initialValues={{
          email: "",
        }}
        onSubmit={submitFunc}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Row>
                  <Col md={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 3 }}>
                    <img className={styles.loginPNG} src={loginLog} alt="loginPNG"></img>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12} >
                <div className={styles.rSideBox}>
                  <div className={styles.logSpan}>
                    <span>Member Login</span>
                  </div>
                  <Field
                    type="text"
                    placeHolder="E-Mail Adress"
                    component={CustomInput}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                  />
                  <div onClick={handleSubmit} className={styles.logBut}>
                    <span>Login</span>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}
