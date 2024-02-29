import { useState } from 'react';
import Feedback from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncreament = value => {
    if (value === 'good') setGood(prev => prev + 1);
    else if (value === 'neutral') setNeutral(prev => prev + 1);
    else if (value === 'bad') setBad(prev => prev + 1);
  };
  const totalFeedback = () => {
    return Number(good + neutral + bad);
  };

  const positiveFeedback = () => {
    return Math.round((good / totalFeedback()) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please leave feedback!">
        <Feedback
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleIncreament}
        />
      </Section>

      {totalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedback()}
          />
        </Section>
      ) : (
        <h2>There is no feedback</h2>
      )}
    </div>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncreament = value => {
//     this.setState(prevState => {
//       return { [value]: prevState[value] + 1 };
//     });
//   };

//   totalFeedback = value =>
//     Number(this.state.good + this.state.neutral + this.state.bad);

//   positiveFeedback = value =>
//     Math.round((this.state.good / this.totalFeedback()) * 100) || 0;

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <Feedback

//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleIncreament}
//           />
//         </Section>

//         {this.totalFeedback() > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.totalFeedback()}
//               positivePercentage={this.positiveFeedback()}
//             />
//           </Section>
//         ) : (
//           <h2>There is no feedback</h2>
//         )}
//       </div>
//     );
//   }
// }
