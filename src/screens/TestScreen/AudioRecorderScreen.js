import React from 'react';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import VoiceRecoder from '../../component/voiceRecoder/VoiceRecoder';

const AudioRecorderScreen = () => {
    return (
        <div className="d-md-flex test-main">            
           <QuestionBar />
           <VoiceRecoder />
        </div>
    );
}
export default AudioRecorderScreen;