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
import { getTaskById, uptadeTask } from "./actions"
import { } from "./selector"
import FormGroup from "./form"
import { useParams } from 'react-router-dom'
import { makeSelectUptade } from "./selector"




const key = "uptade";
export function Create({ uptadeTaskFunc, getTaskByIdFunc, uptade }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { id } = useParams()
  useEffect(() => {
    getTaskByIdFunc(id)
  },
    []);

  return (
    <div className={styles.create}>
      <Container>
        <Row className="mt-40">
          <Col xs={"12"}>
            <h1>Uptade Task</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mt-50">
          <Col sm={"12"} md={"8"} lg={"6"} xl={"5"}>
            <FormGroup submitFunc={uptadeTaskFunc(id)} data={uptade.task} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Create.propTypes = {};
const mapStateToProps = createStructuredSelector({
  uptade: makeSelectUptade()
});

export function mapDispatchToProps(dispatch) {
  return {
    getTaskByIdFunc: (id) => {
      dispatch(getTaskById(id));
    },
    uptadeTaskFunc: (id) => {
      return (values)=>{
        dispatch(uptadeTask(id,values))
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
