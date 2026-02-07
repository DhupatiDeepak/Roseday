import React from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeCard from './cards/WelcomeCard';
import MemoriesCard from './cards/MemoriesCard';
import MemoriesCard2 from './cards/MemoriesCard2';
import PickRoseCard from './cards/PickRoseCard';
import MessageCard from './cards/MessageCard';
import FinalCard from './cards/FinalCard';

const CardContainer = ({ step, setStep }) => {
    const nextStep = () => setStep((prev) => prev + 1);
    const restart = () => setStep(1);

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px',
            minHeight: '600px', // or auto/min-content
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
        }}>
            <AnimatePresence mode='wait'>
                {step === 1 && <WelcomeCard key="step1" onNext={nextStep} />}
                {step === 2 && <MemoriesCard key="step2" onNext={nextStep} />}
                {step === 3 && <MemoriesCard2 key="step3" onNext={nextStep} />}
                {step === 4 && <PickRoseCard key="step4" onNext={nextStep} />}
                {step === 5 && <MessageCard key="step5" onNext={nextStep} />}
                {step === 6 && <FinalCard key="step6" onReplay={restart} />}
            </AnimatePresence>
        </div>
    );
};

export default CardContainer;
