import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertShow, setAlertShow] = useState(false);

  const handleShowAlert = () => {
    setAlertShow(true);
  };

  const handleDisappearAlert = () => {
    setAlertShow(false);
  };

  return (
    <>
      <Button onClickBtn={handleShowAlert}>Click Me</Button>
      {alertShow && (
        <Alert onExitBtn={handleDisappearAlert}>
          This is <span>Alert</span> Message
        </Alert>
      )}
    </>
  );
};

export default App;
