import React from "react";
import { Row, Col } from "react-bootstrap";

function DatesList({ personData }) {
  const finalResult = personData.map((person) => {
    return (
      <div
        className="d-flex align-items-center border-bottom mx-3 mb-1"
        key={person.id}
      >
        <img src={person.img} alt="Person" className="img-avatar ms-3" />
        <div>
          <p className="d-inline fs-5">{person.name}</p>
          <p className="fs-6">{person.date}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8">
          <div className="rectangle p-2">
            {personData.length ? (
              finalResult
            ) : (
              <h2 className="p-4 text-center">لا يوجد مواعيد اليوم</h2>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DatesList;
