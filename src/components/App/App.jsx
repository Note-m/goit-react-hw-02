import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("statistics");
    return savedReviews
      ? JSON.parse(savedReviews)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  useEffect(() => {
    localStorage.setItem("statistics", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };
  const reset = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const handleClickGood = () => {
    setReviews({
      ...reviews,
      good: reviews.good + 1,
    });
  };

  const handleClickNeutral = () => {
    setReviews({
      ...reviews,
      neutral: reviews.neutral + 1,
    });
  };

  const handleClickBad = () => {
    setReviews({
      ...reviews,
      bad: reviews.bad + 1,
    });
  };
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((reviews.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} reset={reset} />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
          onClickGood={handleClickGood}
          onClickNeutral={handleClickNeutral}
          onClickBad={handleClickBad}
        />
      ) : (
        <p style={{ fontSize: "30px", color: "darkblue" }}>No feedback yet</p>
      )}
    </>
  );
};
export default App;
