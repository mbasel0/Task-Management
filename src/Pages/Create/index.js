import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import reducer from "./reducer";
import saga from "./saga";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import "../../App.css";
import { create } from "./actions"
import { } from "./selector"
import FormGroup from "./form"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

const key = "create";
export function Create({ createFunc }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div className={styles.create}>
      <Row className={styles.backButton}>
        <Col md="12">
          <Link to="/task">
            <FontAwesomeIcon icon={faBackspace} size='2x' color="#9e9e9e" />
          </Link>
        </Col>
      </Row>
      <Container>
        <Row className="mt-40">
          <Col xs={"12"}>
            <h1>Create Task</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mt-50">
          <Col sm={"12"} md={"8"} lg={"6"} xl={"5"}>
            <FormGroup submitFunc={createFunc} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Create.propTypes = {};
const mapStateToProps = createStructuredSelector({

});

export function mapDispatchToProps(dispatch) {
  return {
    createFunc: (values) => {
      dispatch(create(values));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
