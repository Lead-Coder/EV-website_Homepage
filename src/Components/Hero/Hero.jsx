import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import playicon from '../../Assets/play_icon.png'
import pauseicon from '../../Assets/pause_icon.png'

const Hero = ({data, sethc, herocount, setp, play}) => {
    return (
        <div className='hero'>
            <div className='text'>
                <p>{data.text1}</p>
                <p>{data.text2}</p>
            </div>
            <div>
                <div className="heroe">
                    <p>Explore everything</p>
                    <img src={arrow_btn} alt="" />
                </div>
                <div className="herop">
                    <ul className="dots">
                    <li onClick={() => sethc(0)} className={herocount===0 ? "dot orange":"dot"}></li>
                    <li onClick={() => sethc(1)} className={herocount===1 ? "dot orange":"dot"}></li>
                    <li onClick={() => sethc(2)} className={herocount===2 ? "dot orange":"dot"}></li>
                    </ul>
                    <div className="playh">
                        <img onClick={() => setp(!play)} src={play?pauseicon:playicon} alt="" />
                        <p>See the video</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero