import React from 'react';
import ResultBar from '../../component/questionLeft/ResultBar';
import ChooseResult from '../../component/questionRight/ChooseResult'
const ResultPage = (props) => {
    return (
        <div className="d-md-flex test-main">            
           <ResultBar />
           <ChooseResult />
        </div>
    );
}
export default ResultPage;