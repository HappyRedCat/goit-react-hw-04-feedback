import React from 'react';
import { List, BtnList, ListItem } from './FeedbackOptions.styled';


const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, index) => (
        <ListItem key={index} option={option}>
          <BtnList
            option={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
          
            {option}
          </BtnList>
        </ListItem>
      ))}
    </List>
  );
};

export default Feedback;
