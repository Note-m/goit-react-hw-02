import css from "./Options.module.css";

const Options = ({ totalFeedback, updateFeedback, reset }) => {
  return (
    <div className={css.optionsWrapper}>
      <button
        className={css.feedbackOpt}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.feedbackOpt}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.feedbackOpt} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button className={css.feedbackOpt} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
