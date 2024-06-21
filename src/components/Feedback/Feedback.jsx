import css from "./Feedback.module.css";

const Feedback = ({
  reviews,
  positiveFeedback,
  totalFeedback,
  updateFeedback,
}) => {
  return (
    <div className={css.feedbackWrapper}>
      <p className={css.feedbackTitle} onClick={updateFeedback.good}>
        Good: {reviews.good}
      </p>
      <p className={css.feedbackTitle} onClick={updateFeedback.neutral}>
        Neutral: {reviews.neutral}
      </p>
      <p className={css.feedbackTitle} onClick={updateFeedback.bad}>
        Bad: {reviews.bad}
      </p>
      <p className={css.feedbackTitle}>Total: {totalFeedback}</p>
      <p className={css.feedbackTitle}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
