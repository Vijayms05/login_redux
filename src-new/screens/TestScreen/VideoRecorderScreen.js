import React from 'react';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import QuestionDetails from '../../component/questionRight/ChooseQuestion';
import QuestionVideo from '../../component/questionRight/QuestionVideo';
import VoiceRecoder from '../../component/voiceRecoder/VoiceRecoder';
const VideoRecorderScreen = () => {
    return (
        <div className="d-md-flex test-main">            
           <QuestionBar />
           <QuestionVideo />
        </div>
    );
}
export default VideoRecorderScreen;