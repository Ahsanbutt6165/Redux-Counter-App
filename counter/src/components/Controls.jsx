import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../Store/Counter";
import { privacyActions } from "../Store/Privacy";

const Controls = () => {
  const userInput = useRef();
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  const Add = () => {
    dispatch(counterActions.add(userInput.current.value));
    userInput.current.value = "";
  };
  const Subtract = () => {
    dispatch(counterActions.substract(userInput.current.value));
    userInput.current.value = "";
  };
  const privacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div>
        {" "}
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={increment}
          >
            +1
          </button>
          <button
            type="button"
            className="btn btn-success btn-lg px-4"
            onClick={decrement}
          >
            -1
          </button>
          <button
            type="button"
            className="btn btn-warning btn-lg px-2"
            onClick={privacyToggle}
          >
            Privacy Toggle
          </button>
        </div>
      </div>
      <div>
        {" "}
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
          <input type="text" placeholder="Enter Number" ref={userInput} />
          <button
            type="button"
            className="btn btn-info btn-lg px-4"
            onClick={Add}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg px-4 "
            onClick={Subtract}
          >
            Substract
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
