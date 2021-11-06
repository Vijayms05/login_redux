import React from 'react';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import UnderlineQuestion from '../../component/questionRight/UnderlineQuestion';
const FillQusetionScreen = () => {
    return (
        <div className="d-md-flex test-main">            
           <QuestionBar />
           <UnderlineQuestion />
        </div>
    );
}
export default FillQusetionScreen;