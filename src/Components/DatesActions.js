import React from "react";
import { Row, Col } from "react-bootstrap";

function DatesActions({ deleteData, viewData }) {
  return (
    <div>
      <Row className="justify-content-center mt-2">
        <Col sm="8" className="d-flex justify-content-between">
          <button className="btn-style p-1" onClick={deleteData}>
            مسح الكل
          </button>
          <button className="btn-style p-1" onClick={viewData}>
            عرض البيانات
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default DatesActions;
