import React, { memo } from 'react'
import { StyledForm, Title, Button } from './style';
import { Input, TextArea } from '../input/style';


const Form = () => {
  return (
    <StyledForm>
      <Title>Send us Message</Title>
      <Input 
        type="text"
        aria-label="Name"
        placeholder="Name"
      />
      <Input 
        type="email "
        aria-label="Email"
        placeholder="Email"
      />
      <TextArea 
        aria-label="Your message"
        placeholder="Your message..."
        rows="6"
        maxLength="100"
        required
      />
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
}

export default memo(Form);