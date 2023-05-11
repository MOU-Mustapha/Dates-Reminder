import { useState } from "react";
import { Container } from "react-bootstrap";
import DatesActions from "./Components/DatesActions";
import DatesHeader from "./Components/DatesHeader";
import DatesList from "./Components/DatesList";
import { data } from "./data";

function App() {
  const [personData, setPersonData] = useState(data);
  const handleDelete = () => {
    setPersonData([]);
  };
  const handleView = () => {
    setPersonData(data);
  };
  return (
    <div className="font color-body">
      <Container className="p-3">
        <DatesHeader personData={personData} />
        <DatesList personData={personData} />
        <DatesActions deleteData={handleDelete} viewData={handleView} />
      </Container>
    </div>
  );
}

export default App;
