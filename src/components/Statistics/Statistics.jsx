import React from 'react';
import { ListItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <ListItem>
        <p>Good: {good}</p>
      </ListItem>
      <ListItem>
        <p>Neutral: {neutral}</p>
      </ListItem>
      <ListItem>
        <p>Bad: {bad}</p>
      </ListItem>
      <ListItem>
        <p>Total: {total}</p>
      </ListItem>
      <ListItem>
        <p>Positive feedback: {positivePercentage} %</p>
      </ListItem>
    </ul>
  );
};

export default Statistics;
