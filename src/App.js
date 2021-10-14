import React from 'react';
import './style.css';
import { styled } from '@stitches/react';

const Button = styled('button', {
  display: "inline-block",
  borderRadius: "3px",
  padding: "10px 20px",
  margin: "0.5rem 1rem",
  border: 'none'
});

export default function App() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div>
       <h1>Hello Stitches!</h1>
      {[...Array(1000).keys()].map((item) => (
        <Button css={{backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)}}>
          {' '}
          Click Me
        </Button>
      ))}

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
