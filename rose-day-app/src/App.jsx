import React, { useState } from 'react';
import FloatingHearts from './components/AnimatedBackground';
import CardContainer from './components/CardContainer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [step, setStep] = useState(1);

  return (
    <ErrorBoundary>
      <FloatingHearts />
      <CardContainer step={step} setStep={setStep} />
    </ErrorBoundary>
  );
}

export default App;
