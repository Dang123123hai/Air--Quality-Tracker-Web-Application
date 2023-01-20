
import React from 'react'

const QuizBar = ({done}) => {

  const Parentdiv = {
    height: '30',
    width: '10',
    backgroundColor: 'rgba(128, 126, 126, 0.115)',
    borderRadius: 40,
   
  }
  
  const Childdiv = {
    height: '100%',
    width: `${done}%`,
    backgroundColor: 'rgba(137, 162, 199, 0.658)',
    borderRadius:40,
    textAlign: 'right'
  }
  
  const progresstext = {
    padding: 10,
    color: 'white',
    fontWeight: 30

  }
    
return (
<div style={Parentdiv}>
  <div style={Childdiv}>
    <span style = {progresstext}>{`${done}%`}</span>
  </div>
</div>
)
}


export default QuizBar