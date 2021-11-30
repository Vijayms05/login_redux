import React from 'react';
import DummyQuestionBar from '../../component/dummyquestion/DummyQuestionBar';
import DummyQuestionChoose from '../../component/dummyquestion/DummyQuestionChoose';

const DummyQuestionPage = () => {
    return (
        <div className="d-md-flex test-main">            
           <DummyQuestionBar />
           <DummyQuestionChoose />
        </div>
    );
}
export default DummyQuestionPage;