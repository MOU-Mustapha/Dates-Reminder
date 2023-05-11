import React from "react";
import { Row, Col } from "react-bootstrap";

function DatesHeader({ personData }) {
  return (
    <div>
      <Row className="justify-content-center mb-2">
        <Col sm="8">لديك {personData.length} مواعيد اليوم</Col>
      </Row>
    </div>
  );
}

export default DatesHeader;
