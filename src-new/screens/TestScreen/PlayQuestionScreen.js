import React from 'react';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import PlayQuestion from '../../component/voiceRecoder/PlayQuestion';

const PlayQuestionScreen = () => {
    return (
        <div className="d-md-flex test-main">            
           <QuestionBar />
           <PlayQuestion />
        </div>
    );
}
export default PlayQuestionScreen;