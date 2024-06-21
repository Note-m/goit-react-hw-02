import css from "./Feedback.module.css";

const Feedback = ({
  reviews,
  positiveFeedback,
  totalFeedback,
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <div className={css.feedbackWrapper}>
      <p className={css.feedbackTitle} onClick={onClickGood}>
        Good: {reviews.good}
      </p>
      <p className={css.feedbackTitle} onClick={onClickNeutral}>
        Neutral: {reviews.neutral}
      </p>
      <p className={css.feedbackTitle} onClick={onClickBad}>
        Bad: {reviews.bad}
      </p>
      <p className={css.feedbackTitle}>Total: {totalFeedback}</p>
      <p className={css.feedbackTitle}>Positive: {positiveFeedback}</p>
    </div>
  );
};

export default Feedback;
