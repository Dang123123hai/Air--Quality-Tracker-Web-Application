
function Questions({handleAnswer, showAnswers,index, handleNextQuestion,click, data:{question, answers, incorrect_answers,correct_answer}}){
    return(
        <div>
            <p className = 'cur_quiz' style ={{width:'50%'}} >{index + 1} of 10 questions</p>  
            <div className = 'quest' >
                <p dangerouslySetInnerHTML = {{__html:question}}/>
            </div>

            <div className = 'answer'>
                {answers.map((ans,i) =>{
                    const trueFalse = showAnswers ? (
                        ans === correct_answer ? 'true_option' : 
                        ans === click?  'false_options': ''
                    ) : '';
                    return(
                        <button className = {`answer_button ${trueFalse}`}
                        onClick = {() => handleAnswer(ans)} dangerouslySetInnerHTML = {{__html:ans}}/>
                    )
                })}
            </div>
            {showAnswers && (
                <button onClick = {handleNextQuestion} className = 'next_quiz' align = 'middle'> NEXT</button>
            )}
        </div>
    )
}

export default Questions