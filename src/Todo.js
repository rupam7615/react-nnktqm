import React, { useState } from 'react';
function Todo() {
  let [arr, setArr] = useState([]);
  let [text, setText] = useState('');
  let add = () => {
    if (text !== '') {
      setArr({ ...arr, text });
      settext('');
    }
  };
  console.log('rerender hua');
  return (
    <div>
      <input
        type="text"
        placeholder="Add some Text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>
      <div>
        Todos:
        {arr.map((ele) => (
          <p>{ele}</p>
        ))}
      </div>
    </div>
  );
}
export default Todo;
