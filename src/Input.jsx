import React from 'react';

const Input = (props) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  // Use a regular expression to check if the input value matches the pattern you want
  const handleSubmit = () => {
    const regex = /^/;
    if (regex.test(inputValue)) {
      // If the input value matches the pattern, fetch data from the API
      fetch(`https://api.binance.com/${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          props.onResponse(data);
        });
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
