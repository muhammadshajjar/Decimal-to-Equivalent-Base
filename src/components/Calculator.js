import React, { useReducer, useState } from "react";
import { convert } from "../helper/convertDecimalToBase";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Calculator.module.css";

const INITIAL_STATE = {
  value: 2,
  name: "Binary",
};

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "BINARY":
      return state;

    case "OCTAL":
      return {
        value: 8,
        name: "Ocatal",
      };

    case "HEXADECIMAL":
      return {
        value: 16,
        name: "Hexadeciaml",
      };

    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatchFunc] = useReducer(calculatorReducer, INITIAL_STATE);
  const [output, setOutput] = useState("");
  const [number, setNumber] = useState(null);

  const baseChangeHandler = (e) => {
    dispatchFunc({ type: e.target.value });
  };

  const getNumberFromInput = (e) => {
    setNumber(Number(e.target.value));
  };

  const convertToBinary = () => {
    setOutput(convert(number, state.value));
  };

  return (
    <div className={`${classes.card__container} container`}>
      <Card>
        <h2 className={classes.title}>Decimal to {state.name}</h2>
        <div className={classes.form__controls}>
          <div>
            <label className={classes.label}>Number</label> <br />
            <input
              type="number"
              className={classes.form__input}
              onChange={getNumberFromInput}
            />
          </div>

          <div>
            <label className={classes.label}>To</label>
            <br />
            <select
              name="numberSystem"
              id="numberSystem"
              className={classes.form__input}
              onChange={baseChangeHandler}
            >
              <option value="BINARY">Binary</option>
              <option value="OCTAL">Octal</option>
              <option value="HEXADECIMAL">Hexadeciaml</option>
            </select>
          </div>
        </div>

        <div className={classes.output}>
          <label className={classes.label}>Output</label>
          <br />
          <input type="text" className={classes.output__input} value={output} />
          <Button className={classes.btn} onClick={convertToBinary}>
            Convert
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
