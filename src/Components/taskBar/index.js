import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTrashAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'


export default function TaskBar({ onDelete, onComplete, onReject, user, task, }) {
   const {
      assignedDepartment,
      description,
      id,
      status,
      title,
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
      switch (parseInt(status)) {
         case 1:
            return "Completed";
         case 2:
            return "Rejected";
         default:
            return "Pending"
      }
   }

   console.log(style.status)

   return (
      <div className={style.taskBar}>
         <Row>
            <Col lg={8} md={6} sm={12}>
               <Row>
                  <Col sm={"4"}>
                     <div >
                        <span>{getDep(assignedDepartment)}</span>
                     </div>
                  </Col>
                  <Col sm={"4"}>
                     <div >
                        <span>{description}</span>
                     </div>
                  </Col>
                  <Col sm={"4"}>
                     <div >
                        <span>{title}</span>
                     </div>
                  </Col>
               </Row>
            </Col>
            <Col lg={4} md={6} sm={12}>
               <Row>
                  <Col sm={"6"}>
                     <FontAwesomeIcon cursor="pointer" onClick={() => onReject(id)} icon={faWindowClose} color="#fa3f3f" />
                     <FontAwesomeIcon cursor="pointer" onClick={() => onComplete(id)} className={"ml-2"} icon={faCheckSquare} color="#439e4a" />
                     <FontAwesomeIcon cursor="pointer" className={"ml-2"} icon={faEdit} />
                     <FontAwesomeIcon cursor="pointer" onClick={() => onDelete(id)} className={"ml-2"} icon={faTrashAlt} />
                  </Col>
                  <Col sm={"6"}>
                     <div className={`${style.status} ${status === 2 ? style.rejected : style.completed } `}>
                        <span>{getStatus(status)}</span>
                     </div>
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   )
};

