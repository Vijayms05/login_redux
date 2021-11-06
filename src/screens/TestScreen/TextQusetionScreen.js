import React from 'react';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import TextQuestion from '../../component/questionRight/TextQuestion';
const TextQusetionScreen = () => {
    return (
        <div className="d-md-flex test-main">            
           <QuestionBar />
           <TextQuestion />
        </div>
    );
}
export default TextQusetionScreen;