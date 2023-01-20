

import {Doughnut} from 'react-chartjs-2'
const Bar1= (props) =>{
    const data1={
        labels: ["Correct Answers", "False Answers"],
        datasets:[{
            label : 'Score Visualize',
            data : [props.ax ,10 - props.ax],
            backgroundColor : ['rgba(202, 245, 177, 0.618)','rgba(247, 144, 144, 0.618)'],
            borderColor : ['rgb(187, 236, 158)','rgba(247, 144, 144, 0.918)'],
            borderWidth : 2,
            barThickness: 100,
            hoverOffset:4,
        }]}
    return(
        <div>
   <Doughnut data={data1}/>
        </div>
        )
    
}
export default Bar1