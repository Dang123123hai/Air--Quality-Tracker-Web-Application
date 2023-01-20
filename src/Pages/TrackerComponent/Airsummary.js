import Card from "./Card"
import {CardContent,Typography, Grid} from "@material-ui/core"
import moment from 'moment'
import CountUp from 'react-countup'
import sky from '../../images/pic2.mp4'


moment.locale('vi')

const AirSummary = (props) => {
    const { temprature,
        humidity,
        windSpeed,
        airQuality } = props
        
    
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <div>
                <section>
                    <div className = 'head-text'>
                        <div className = 'head-img'>
                           <video  src = {sky} loop='True' autoPlay ='True' style={{width:'100%'}} />
                        </div>
                        <div className = 'text-on-img'>
                           <h3>Time to know the Air Quality better</h3>
                           <p>Empowering individuals and communities with knowledge about the air quality they breathe.</p>
                        </div>
                    </div>
                </section>
                    <div>
                        </div> 
                <section className = 'lewlew'>
                    <h2>
                        <div className = 'lewlew-inner'>
                            <h1>Why need tracking?</h1>
                            <p>Changing the way you see the air you breathe everyday, is the first step to understand the health risks and making improvements</p>
                        </div>
                    </h2>
                </section>
                <section >
                    <div><br/><br/>
                        <h1 className = 'title'>Air Quality Tracker</h1>
                    </div>
                <Typography color ='textSecondary'>{moment().format('LL')}</Typography>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        
                        <Card>
                            <CardContent >
                                <Typography color = 'textSecondary' gutterBottom>Temperature</Typography>
                                <Typography variant = "h5">
                                    <span> <CountUp end={temprature} separator=' ' duration={1} />{temprature === undefined? '' : '°'}</span>
                                </Typography>
                            </CardContent>                                                      
                        </Card>

                        <Card>
                            <Grid spacing={3}>
                                <CardContent>
                                <Typography color = 'textSecondary' gutterBottom>Humidity</Typography>
                                <Typography variant = "h5">
                                   <span><CountUp end={humidity} separator=' ' duration={1} />{humidity === undefined? '' : '%'}</span>
                                </Typography>
                                </CardContent>
                            </Grid>
                        </Card>

                        <Card>                           
                            <Grid spacing={3}>
                                <CardContent>
                                <Typography color = 'textSecondary' gutterBottom>Wind Speed</Typography>
                                <Typography variant = "h5">
                                    <span><CountUp end={windSpeed} separator=' ' duration={1} /></span>
                                </Typography>
                                </CardContent>
                            </Grid>
                        </Card>

                        <Card AQ={airQuality}>
                            <Grid spacing={3}>
                                <CardContent>
                                <Typography color = 'textSecondary' gutterBottom>Air Pollution</Typography>
                                <Typography variant = "h5"> 
                                    <span><CountUp end={airQuality} separator=' ' duration={1} /></span>
                                    
                                </Typography>
                                </CardContent>
                            </Grid>
                        </Card>              
                    </div>
                    </section>
                </div>
            </div>

        </div>
    )
}
export default AirSummary