import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import reducer from "./reducer";
import saga, { completeTaskSaga } from "./saga";
import styles from "./style.module.scss";
import "../../App.css";
import TaskBar from "../../Components/taskBar";
import TaskBarHeader from "../../Components/taskBarHeader";
import { getMyTasks, deleteTask } from "./actions"
import { makeSelectTask } from "./selector"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace, } from '@fortawesome/free-solid-svg-icons'
import { makeSelectLogin } from "../Auth/Login/selector";



const key = "MyTask";
export function MyTask({ getMyTasksFunc, task, delTaskFunc , login}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getMyTasksFunc()
  }, []);

  return (
    <div className={styles.task}>
      <Link to="/task">
        <FontAwesomeIcon icon={faBackspace} size='2x' />
      </Link>
      <TaskBarHeader />
      {task.myTasks.map((item) => {
        return <TaskBar user={login.user} task={item} onDelete={delTaskFunc} />
      })};
    </div>
  );
}

MyTask.propTypes = {
  postLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  task: makeSelectTask(),
  login: makeSelectLogin()
});

export function mapDispatchToProps(dispatch) {
  return {
    getMyTasksFunc: () => {
      dispatch(getMyTasks());
    },
    delTaskFunc: (id) => {
      dispatch(deleteTask(id))
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyTask);


