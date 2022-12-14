import React from 'react';
import './style.css';
import Input from './Input.jsx';

export default function App() {
  const [apiData, setApiData] = React.useState([]);

  const handleInputResponse = (data) => {
    setApiData(data);
  };

  return (
    <div>
      <Input onResponse={handleInputResponse} />
      {Array.isArray(apiData) ? (
        <ul>
          {apiData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>{apiData}</p>
      )}
    </div>
  );
}
