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
import { getPendingTasks, deleteTask } from "./actions"
import { makeSelectPendings } from "./selector"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faBackspace, } from '@fortawesome/free-solid-svg-icons'
import { makeSelectLogin } from "../Auth/Login/selector";



const key = "pendings";
export function PendingTasks({ getPendingsFunc, task, delTaskFunc, login }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getPendingsFunc()
  }, []);

  return (
    <div className={styles.task}>
      <Link to="/task">
        <FontAwesomeIcon icon={faBackspace} size='2x' />
      </Link>
      <TaskBarHeader />
      {task.pendings.map((item) => {
        return <TaskBar user={login.user} task={item} onDelete={delTaskFunc}  />
      })}
    </div>
  );
}
PendingTasks.propTypes = {
  postLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  task: makeSelectPendings(),
  login: makeSelectLogin()
});

export function mapDispatchToProps(dispatch) {
  return {
    getPendingsFunc: () => {
      dispatch(getPendingTasks());
    },
    delTaskFunc: (id) => {
      dispatch(deleteTask(id))
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PendingTasks);


// log out problem