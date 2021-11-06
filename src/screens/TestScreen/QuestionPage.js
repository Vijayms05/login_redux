import React from 'react';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import ChooseQuestion from '../../component/questionRight/ChooseQuestion';
const QuestionPage = () => {
    return (
        <div className="d-md-flex test-main">            
           <QuestionBar />
           <ChooseQuestion />
        </div>
    );
}
export default QuestionPage;