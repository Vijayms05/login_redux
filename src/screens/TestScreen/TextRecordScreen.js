import React from 'react';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import TestRecord from '../../component/voiceRecoder/TestRecord';

const TextRecordScreen = () => {
    return (
        <div className="d-md-flex test-main">            
           <QuestionBar />
           <TestRecord />
        </div>
    );
}
export default TextRecordScreen;