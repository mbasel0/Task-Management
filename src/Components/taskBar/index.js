import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Col, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTrashAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons'



export default function TaskBar({ onDelete, onComplete, onReject, user, task }) {
   const {
      assignedDepartment,
      description,
      id,
      status,
   } = task;

   const getDep = (assignedDepartment) => {
      var department = assignedDepartment;
      switch (parseInt(department)) {
         case 1:
            department = "İnsan Kaynakları Departmanı";
            break;
         case 2:
            department = "Satış Departmanı";
            break;
         case 3:
            department = "Pazarlama Departmanı";
            break;
         default:
            break;
      }
      return department
   }

   const getStatus = (status) => {
      var taskStatus = status;
      switch (parseInt(taskStatus)) {
         case 0:
            taskStatus = "Pending";
            break;
         case 1:
            taskStatus = "Completed";
            break;
         case 2:
            taskStatus = "Rejected";
            break;
         default:
            break;
      }
      return taskStatus
   }



   return (

      <Col>
         <Row className={style.upRow}>
            <Col xl={"2"}>
               <div className={style.dRow}>
                  <span>{getDep(assignedDepartment)}</span>
               </div>
            </Col>
            <Col xl={"8"}>
               <div className={style.dRow}>
                  <span>{description}</span>
               </div>
            </Col>
            <Col xl={"2"}>
               <div className={style.dRow}>
                  <span>{getStatus(status)}</span>
                  <div>
                     {(user.department === assignedDepartment) &&
                        <>
                           <Button className={"btn-sm btn-outline-warning btn-dark mr-1 mt-1 "} onClick={() => onComplete(id)}>
                              <FontAwesomeIcon icon={faCheckSquare} />
                           </Button>
                           <Button className={"btn-sm btn-outline-warning btn-dark mt-1 "} onClick={() => onReject(id)}>
                              <FontAwesomeIcon icon={faWindowClose} />
                           </Button>
                        </> //frag
                     }
                  </div>
               </div>
               <div>
                  {(user.id === task.user.id) &&
                     <>
                        <Button className={"btn-sm btn-outline-warning btn-dark mr-1 mt-1"} onClick={() => onDelete(id)}>
                           <FontAwesomeIcon icon={faTrashAlt} />
                        </Button >
                        <Link className={"btn btn-sm btn-outline-warning btn-dark mt-1 "} to={`/task/uptade/${id}`}>
                           <FontAwesomeIcon icon={faEdit} />
                        </Link>
                     </>
                  }
               </div>
            </Col>
         </Row>
      </Col>
   )
};

