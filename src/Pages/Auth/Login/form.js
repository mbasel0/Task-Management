import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Button, Col, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import Validations from "../../../utils/validations";
import CustomInput from "../../../Components/CustomInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";



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
              <div className={styles.bak}>
                <Col md={"12"}>
                  <Row className={"align-items-center justify-content-center"}>
                    <Col sm={"12"} md={"6"}>
                      <Field
                        type="text"
                        placeHolder="E-Mail Adress"
                        component={CustomInput}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={"12"}>
                  <Row className={"align-items-center justify-content-center"}>
                    <Col xs={"12"} sm={"5"} md={"6"} lg={"4"} >            
                        <Button type="submit">
                          <FontAwesomeIcon icon={faSignInAlt} size='2x' />
                        </Button>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}
