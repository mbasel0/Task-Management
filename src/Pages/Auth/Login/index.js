import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { useInjectSaga } from "../../../utils/injectSaga";
import { useInjectReducer } from "../../../utils/injectReducer";
import { login } from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import "../../../App.css";
import Navigation from "../../../Components/Navigation";
import FormGroup from "./form";
import { makeSelectLogin } from "./selector"
import loginPNG from "../../../Images/login.png"


const key = "login";

export function Login({ loginFunc }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div className={styles.login}>
      <Navigation brand={"login"} navItems={["DDD", "DDD"]} />
      <Container>       
          <Row className="mt-40">
            <Col xs={"12"}>
              <img className={styles.loginPNG} src={loginPNG} alt="loginPNG"></img>
            </Col>
          </Row>
        <Row className="justify-content-center mt-50">
          <Col sm={"12"} md={"8"} lg={"6"} xl={"5"}>
            <FormGroup submitFunc={loginFunc} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Login.propTypes = {
  postLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  home: makeSelectLogin()

});

export function mapDispatchToProps(dispatch) {
  return {
    loginFunc: (values) => {
      dispatch(login(values));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
