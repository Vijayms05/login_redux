import React from 'react';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import QuesAnsRec from '../../component/voiceRecoder/QuesAnsRec';

const QuestionAnsRecordScreen = () => {
    return (
        <div className="d-md-flex test-main">            
           <QuestionBar />
           <QuesAnsRec />
        </div>
    );
}
export default QuestionAnsRecordScreen;