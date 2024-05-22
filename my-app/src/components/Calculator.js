import React, { useState, useEffect } from 'react';
import '../styles/calculator.css';

function Calculator() {
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key } = event;
            if (/[0-9+\-*/.]/.test(key)) {
                handleClick(key);
            } else if (key === 'Enter') {
                handleClick('=');
            } else if (key === 'Backspace') {
                handleClick('C');
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const calculateResult = (expression) => {
        try {
            // Using Function constructor to safely evaluate the expression
            const safeEval = (expr) => Function('"use strict"; return (' + expr + ')')();
            return String(safeEval(expression));
        } catch (error) {
            return 'Error';
        }
    };

    const handleClick = (value) => {
        if (value === '=') {
            const calculatedResult = calculateResult(display);
            setResult(calculatedResult);
        } else if (value === 'C') {
            setDisplay('');
            setResult('');
        } else {
            setDisplay((prevDisplay) => prevDisplay + value);
        }
    };

    return (
        <div className='calculator'>
            <div className="display">
                <div className="current-input">{display}</div>
                <div className="result">{result}</div>
            </div>
            <div className='buttons'>
                {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '=', 'C', '/'].map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;
