import React from "react";
import style from "./header.module.css";
import youtubelogo from '../../assets/logo4.png'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.top_header}>
          <div className={style.header_left}>
            <ul>
              <li><MenuIcon/></li>
              <li>
                <img src={youtubelogo} className={style.logo}alt="you tube logo" />
              </li>
              <li className={style.youtube_text}>YouTube</li>
            </ul>
          </div>
          <div className={style.header_middel}>
            <ul>
              <li className={style.header_middel_li}>
                <input type="text" placeholder="Search" className={style.input} />
                <button className={style.search_icon}><SearchIcon/></button>
                
              </li>
              <li className={style.recored_icon}><KeyboardVoiceIcon/>
              </li>
            </ul>
          </div>
          <div className={style.header_right}>
            <ul>
              <li className={style.add_button}>
                <button type="" className={style.creat}><AddIcon/>Create</button>
              </li>
              <li><NotificationsNoneIcon/></li>
              <li className={style.account_icon}><PanoramaFishEyeIcon/></li>
            </ul>
          </div>
        </div>
        <div className={style.bottom_header}>
          <ul>
            <li style={{backgroundColor:"white"}}>
              <a href="" style={{color:"black"}}>All</a>
            </li>
            <li>
              <a href="">Music</a>
            </li>
            <li>
              <a href="">Live</a>
            </li>
            <li>
              <a href="">Mixes</a>
            </li>
            <li>
              <a href="">JavaScript</a>
            </li>
            <li>
              <a href="">Ai</a>
            </li>
            
            <li>
              <a href="">Comedy</a>
            </li>
            <li>
              <a href="">FootBall</a>
            </li>
            <li>
              <a href="">Web_Development</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Html</a>
            </li>
            <li>
              <a href="">Movie</a>
            </li>
            <li>
              <a href="">Java</a>
            </li>
            
            <li>
              <a href="">Technology</a>
            </li>
            <li>
              <a href="">BascketBall</a>
            </li>
            <li>
              <a href="">Piano</a>
            </li>
            <li>
              <a href="">New to you</a>
            </li>
            <li>
              <a href="">Css</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
