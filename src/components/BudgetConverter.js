import React, { useState } from 'react';

function BudgetConverter() {
  const [budgetUSD, setBudgetUSD] = useState(0);
  const [convertedBudget, setConvertedBudget] = useState({ INR: 0, Euro: 0 });
  const conversionRates = {
    INR: 82, // Example conversion rate
    Euro: 0.95, // Example conversion rate
  };

  const handleBudgetChange = (event) => {
    const value = Math.min(event.target.value, 5000); // Limit to 5000 USD
    setBudgetUSD(value);
  };

  const convertCurrency = (currency) => {
    const rate = conversionRates[currency];
    const convertedValue = (budgetUSD * rate).toFixed(2);
    setConvertedBudget((prevState) => ({
      ...prevState,
      [currency]: convertedValue,
    }));
  };

  return (
    <div>
      <h2>Budget Converter</h2>
      <input
        type="number"
        value={budgetUSD}
        onChange={handleBudgetChange}
        placeholder="Enter budget in USD"
      />
      <div>
        <button onClick={() => convertCurrency('INR')}>Convert to INR</button>
        <button onClick={() => convertCurrency('Euro')}>Convert to Euro</button>
      </div>
      <div>
        <p>Budget in INR: ₹{convertedBudget.INR}</p>
        <p>Budget in Euro: €{convertedBudget.Euro}</p>
      </div>
    </div>
  );
}

export default BudgetConverter;