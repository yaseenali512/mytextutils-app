import React from "react";

const Alert = (props) => {
  const captitalize = (word) => {
    const lowerWord = word.toLowerCase();
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{captitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
