import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import { Button, Col, Row } from "react-bootstrap";
import styles from "./style.module.scss";

import CustomInput from "../../Components/CustomInput";

export default function FormGroup({ submitFunc }) {
  let valitadionSchema = Yup.object().shape({

  });
  return (
    <div className={styles.formGroup}>
      <Formik
        validationSchema={valitadionSchema}
        initialValues={{
          title: "",
          description: "",
          assignedDepartment: "",
        }}
        onSubmit={submitFunc}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={"12"}>
                <Row className={"align-items-center"}>
                  <Col sm={"12"} md={"6"}>
                    <label className={styles.customLabel}>Title</label>
                    <span className={styles.customErrors}>
                      <ErrorMessage name="title" />
                    </span>
                  </Col>
                  <Col sm={"12"} md={"6"}>
                    <Field
                      type="text"
                      placeHolder=""
                      component={CustomInput}
                      onChange={handleChange}
                      value={values.title}
                      name="title"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={"12"}>
                <Row className={"align-items-center"}>
                  <Col sm={"12"} md={"6"}>
                    <label className={styles.customLabel}>Description</label>
                    <span className={styles.customErrors}>
                      <ErrorMessage name="description" />
                    </span>
                  </Col>
                  <Col sm={"12"} md={"6"}>
                    <Field
                      type="text"
                      placeHolder=""
                      component={CustomInput}
                      onChange={handleChange}
                      value={values.description}
                      name="description"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={"12"}>
                <Row className={"align-items-center"}>
                  <Col sm={"12"} md={"6"}>
                    <label className={styles.customLabel}>Assigned Department</label>
                    <span className={styles.customErrors}>
                      <ErrorMessage name="assignedDepartment" />
                    </span>
                  </Col>
                  <Col sm={"12"} md={"6"}>
                    <Field
                      type="number"
                      placeHolder=""
                      component={CustomInput}
                      value={values.assignedDepartment}
                      onChange={handleChange}
                      name="assignedDepartment"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={"12"}>
                <Row className={"align-items-center"}>                 
                  <Col xs={"12"} sm={"5"} md={"6"} lg={"4"}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}