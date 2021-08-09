import React from "react";
import { useHistory } from "react-router-dom";

export const Backbutton = () => {
  const history = useHistory();

  return (
    <button className="back-button" onClick={() => history.goBack()}>
      Back
    </button>
  );
};
