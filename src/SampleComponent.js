import React from 'react';

export default function SampleComponent({ bgColor, a, b }) {
  let styleObj = {
    backgroundColor: bgColor,
  };

  return (
    <>
      <div style={styleObj}>Heading</div>
      <div>value of a is : {a}</div>
      <div>value of a is : {b}</div>
      <div>
        sum of {a} and {b} is : {a * b}
      </div>
    </>
  );
}
