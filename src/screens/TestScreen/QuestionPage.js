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
    var question = [];
    const [questionLength, setQuestionLength] = useState(0);
    const [questionType, setQuestionType] = useState('');
    useEffect(() => {
        TestService.baselineTest({ user_subscription_id: location.state }).then(result => {
            var response = result.data;
            if (response.status == 'success') {
                let len = 0;
                if (response.comprehension_questions.length > 0) {
                    setQuestionType('comprehension_questions');
                    setQuestions(response.comprehension_questions);
                    len = response.comprehension_questions.length;
                    // setQuestionLength(response.comprehension_questions.length);
                } else if (response.spoken_questions.length > 0) {
                    if (response.udsc_questions) {
                        len = response.udsc_questions + response.spoken_questions.length;
                        // setQuestionLength(response.udsc_questions + response.spoken_questions.length);
                    } else {
                        len = response.spoken_questions.length;
                        // setQuestionLength(response.spoken_questions.length);
                    }
                    setQuestions(response.spoken_questions);
                    setQuestionType('spoken_questions');
                }
                setQuestionLength(len);
                for (var i = 0; i < len; i++) {
                    // status 0-not visited, 1-answered, 2-not answered, 3-current question                   
                    question.push({ qno: i + 1, status: 0, answer: '' });
                }
                setQuestionStatus(question);
            }
        }).catch(function (error) {
            ErrorHandler(error);
        });
    }, []);
    return (
        <div className="d-md-flex test-main">
            {questions &&
                <>
                    <QuestionBar data={questions} questionStatus={questionStatus} currentQuestion={currentQuestion} questionLength={questionLength} setCurrentQuestion={setCurrentQuestion} />
                    <ChooseQuestion data={questions} questionStatus={questionStatus} setQuestionStatus={setQuestionStatus} setCurrentQuestion={setCurrentQuestion}
                        currentQuestion={currentQuestion}
                        questionType={questionType}
                        questionLength={questionLength}
                        user_subscription_id={location.state}
                    />
                </>
            }
        </div>
    );
}
export default QuestionPage;