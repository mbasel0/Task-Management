import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import reducer from "./reducer";
import saga, { completeTaskSaga } from "./saga";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import "../../App.css";
import TaskBar from "../../Components/taskBar";
import TaskBarHeader from "../../Components/taskBarHeader";
import { getTasks, deleteTask, completeTask, rejectTask } from "./actions"
import { makeSelectTask } from "./selector"
import { Link } from "react-router-dom";
import { makeSelectLogin } from "../Auth/Login/selector";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPlus, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import  DropDown  from "../../Components/DropDown";



const key = "task";
export function Task({ getTasksFunc, task, delTaskFunc, completeTaskFunc, rejectTaskFunc, login }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getTasksFunc()
  }, []);

  return (
    <div className={styles.task}>
      <DropDown/>
      <TaskBarHeader />
      {task.tasks.map((item) => {
        return <TaskBar task={item} onDelete={delTaskFunc} onComplete={completeTaskFunc} onReject={rejectTaskFunc} user={login.user} />
      })};
    </div>
  );
}

Task.propTypes = {
  postLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  task: makeSelectTask(),
  login: makeSelectLogin()
});

export function mapDispatchToProps(dispatch) {
  return {
    getTasksFunc: () => {
      dispatch(getTasks());
    },
    delTaskFunc: (id) => {
      dispatch(deleteTask(id))
    },
    completeTaskFunc: (id) => {
      dispatch(completeTask(id))
    },
    rejectTaskFunc: (id) => {
      dispatch(rejectTask(id))
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);
