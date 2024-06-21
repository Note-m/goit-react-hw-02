import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

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

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((reviews.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        reset={reset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          updateFeedback={updateFeedback}
          reviews={reviews}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};
export default App;
