import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ValentineWelcomeCard from './cards/ValentineWelcomeCard';
import ReasonsLoveCard from './cards/ReasonsLoveCard';
// import MemoryTimelineCard from './cards/MemoryTimelineCard'; // Consolidating into Reasons or new card if needed
import ValentineQuestionCard from './cards/ValentineQuestionCard';
import ValentineFinalCard from './cards/ValentineFinalCard';

const ValentineFlow = ({ onHome }) => {
    const [step, setStep] = useState(1);
    const nextStep = () => setStep((prev) => prev + 1);

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
        }}>
            <AnimatePresence mode='wait'>
                {step === 1 && <ValentineWelcomeCard key="v_step1" onNext={nextStep} />}
                {step === 2 && <ReasonsLoveCard key="v_step2" onNext={nextStep} />}
                {step === 3 && <ValentineQuestionCard key="v_step3" onNext={nextStep} />}
                {step === 4 && <ValentineFinalCard key="v_step4" onHome={onHome} />}
            </AnimatePresence>
        </div>
    );
};

export default ValentineFlow;
