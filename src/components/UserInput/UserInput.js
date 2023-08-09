import { useState } from "react";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const initialSavings = 1000;
  const initialYearlyContribution = 1200;
  const initialExpectedReturn = 7;
  const initialDuration = 10;

  const [currentSavings, setCurrentSavings] = useState(initialSavings);
  const [yearlyContribution, setYearlyContribution] = useState(
    initialYearlyContribution
  );
  const [expectedReturn, setExpectedReturn] = useState(initialExpectedReturn);
  const [duration, setDuration] = useState(initialDuration);

  const inputChangeHandler = (input, value) => {
    if (input === "current-savings") {
      setCurrentSavings(+value);
    } else if (input === "yearly-contribution") {
      setYearlyContribution(+value);
    } else if (input === "expected-return") {
      setExpectedReturn(+value);
    } else {
      setDuration(+value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const updatedData = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      duration: duration,
    };
    props.onCalculate(updatedData);
  };

  const resetHandler = (input) => {
    setCurrentSavings(initialSavings);
    setYearlyContribution(initialYearlyContribution);
    setExpectedReturn(initialExpectedReturn);
    setDuration(initialDuration);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={currentSavings}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={yearlyContribution}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={expectedReturn}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
