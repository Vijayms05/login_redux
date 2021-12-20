import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QuestionBar from '../../component/questionLeft/QuestionBar';
import ChooseQuestion from '../../component/questionRight/ChooseQuestion';
import { ErrorHandler } from '../../service/ErrorHandler';
import TestService from '../../service/TestService';

const QuestionPage = () => {
    const location = useLocation();
    const [questions, setQuestions] = useState('');
    const [questionStatus, setQuestionStatus] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    useEffect(() => {
        TestService.baselineTest({ user_subscription_id: location.state }).then(result => {
            var response = result.data;
            if (response.status == 'success') {
                setQuestions(response);
            }
        }).catch(function (error) {
            ErrorHandler(error);
        });
    }, []);
    return (
        <div className="d-md-flex test-main">
            {questions &&
                <>
                    <QuestionBar data={questions} questionStatus={questionStatus} currentQuestion={currentQuestion} />
                    <ChooseQuestion data={questions} questionStatus={questionStatus} setQuestionStatus={setQuestionStatus} setCurrentQuestion={setCurrentQuestion} />
                </>
            }
        </div>
    );
}
export default QuestionPage;