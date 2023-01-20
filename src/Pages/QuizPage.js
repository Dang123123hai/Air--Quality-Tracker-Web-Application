import "../quizindex.css"
import React,{useState, useEffect} from "react"
import Questions from "./QuizComponent/Questions"
import axios from "axios"
import QuizBar from "./QuizComponent/QuizBar"
import { Container, makeStyles } from "@material-ui/core"
import Bar1 from "./QuizComponent/bar"
import icon from '.././images/quiz.png'




const URL = "https://my-json-server.typicode.com/ngocduong17/fakeapi/db"
const useStyle  = makeStyles({
    root : {
        border :0,
        borderRadius : 10,
        color :'white',
        padding : '0 30px',
        background : 'linear-gradient(35deg,pink,rgb(255, 191, 175))',
        width: 100,
        height:25

    }
})

function ButtonStyle(){
    const classes = useStyle()
    return (<div> <form action="/QuizPage"  > 
    <input className = {classes.root}  type="submit" value="Retry" />
    </form></div>)

   
}


function QuizPage(){
    const [quiz,setQuiz] = useState([])
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(false)   
    const [click, setClick] = useState(0)
    const [step, setStep] = useState(1)
   

    useEffect(()=>{
        axios.get(URL)
        .then(res => {console.log(res)
        //.then(data =>{
            const quiz = res.data.results.map((dataObj) =>({
                ...dataObj,
                answers:[dataObj.correct_answer, ...dataObj.incorrect_answers].sort(()=> Math.random() - 0.3 )
            }))
            setQuiz(quiz)
        })
    },[])

    const check = (ans) => {
        setClick(ans)
        if (!result){
            
            if (ans === quiz[index].correct_answer){
                setScore(score=>score + 1)
               
              
            }           
        }
        setResult(true)       
    }

    const nextQuiz = (ans) => {
        setIndex(index + 1)
        setResult(false) 
    }

    const onQuizStart=()=>{
        setStep(step + 1)
    }

    return(  
        <div>
        <div>      
        <div align = 'middle' className = 'quiz'>
            {step === 1 && <div>
            <img src ={icon} width ='26%' /><br/>
            <h1>Start the quiz?</h1><br/>
            <button className ='start' onClick={onQuizStart}>Start</button>
        </div>}  
            {step === 2 && <div>{index >= quiz.length ? (<div><h1>You got {score} marks</h1><button className ='aduvjp' onClick={onQuizStart}>Visulize your score</button></div>) :
            <Questions  
            index = {index}   
            handleAnswer = {check}
            click={click}
            showAnswers = {result}
            handleNextQuestion = {nextQuiz}
            data ={quiz[index]}/>}</div>}
        {step===3 && <div>
           <h1>Check your result</h1>
           <div>
           <Bar1 ax={score} style = {{width : '100%',height :'100%'}}/>
          <br/><br/>
           <ButtonStyle className = 'retry' href />
          </div>
        </div>}
        </div>
           <Container align ='left' className = 'bar'  style ={{width:'60%'}}>
                <p>Current Score</p>
                <QuizBar done = {score * 10}/>     
            </Container>
        </div>
       
      
        
        </div>  
    )
}
export default QuizPage;