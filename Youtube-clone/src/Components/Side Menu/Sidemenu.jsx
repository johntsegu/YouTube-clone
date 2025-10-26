import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import style from "./sidemenu.module.css"

const Sidemenu = () => {
  return (
    <div className={style.outer_sidemenu        }>
      <div className={style.inner_sidemenu}>
        <ul>
          <li>
            <HomeIcon />
            <br />
            <p>Home</p>
          </li>
          <li>
            <PlayCircleIcon />
            <br />
            <p>Shorts</p>
          </li>
          <li>
            <SubscriptionsIcon />
            <br />
            <p>Subscription</p>
          </li>
          <li>
            <AccountCircleTwoToneIcon/>
            <br />
            <p>You</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
