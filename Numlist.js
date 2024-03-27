import React, { useState, useEffect } from 'react';

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NumberList = () => {
  const [id, setId] = useState('');
  const [numbers, setNumbers] = useState([]);

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  useEffect(() => {
    let generatedNumbers = [];
    switch (id) {
      case 'p':
        for (let i = 2; generatedNumbers.length < 10; i++) {
          if (isPrime(i)) generatedNumbers.push(i);
        }
        break;
      case 'f':
        for (let i = 0; i < 10; i++) {
          generatedNumbers.push(fibonacci(i));
        }
        break;
      case 'e':
        for (let i = 2; generatedNumbers.length < 10; i += 2) {
          generatedNumbers.push(i);
        }
        break;
      case 'r':
        for (let i = 0; i < 10; i++) {
          generatedNumbers.push(getRandomInt(1, 100));
        }
        break;
      default:
        break;
    }
    setNumbers(generatedNumbers);
  }, [id]);

  return (
    <div>
      <h2>Generate Numbers</h2>
      <label htmlFor="idInput">Enter ID (p for prime, f for Fibonacci, e for even, r for random):</label>
      <input
        type="text"
        id="idInput"
        value={id}
        onChange={handleInputChange}
      />
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
