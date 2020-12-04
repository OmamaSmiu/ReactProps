import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Profile(props) {
  return <div> <fieldset>
    <img src={props.pic} alt="car" id="img" />
    <p id="txt">{props.name}<br/>{props.time}</p>
    <br/>
    <p id="quote">{props.qoute}</p>
    <hr/>
    <img src={props.pic1} alt="123" id="profileImg" />
    <br />
    <hr/>
    <button id="likeBtn"> Like </button>
    <button id="commentBtn"> Comment </button>
    <button id="shareBtn"> share </button>
    <hr/>
  </fieldset>
  </div>
}
ReactDOM.render(
  <p>
    <Profile name=" Babar Azam" time="just now" qoute="Enjoy the game & Chase your dreams"  pic="https://cricketaddictor.com/wp-content/uploads/2019/09/291306-e1568381876641.jpg" pic1="https://lh3.googleusercontent.com/proxy/xruk60_1ECWVLYQdHENcj6jkhlbb4xuWxRd5_5RUoZHnAPXnRndpgDm8DFpc8ULawjG9aIOHRiN13hL70V5kQaxqMyy-nbcO05tW4P6l-tZ2pvj5ger01ySKKY9PmobiqBJXfJb1HluBQC8Ecz5dOSubvR2CcPNfi9QIOnwwIg"/>
    <br/>
    <Profile name=" Shahid Afridi" time="just now" qoute="Enjoy the game & Chase your dreams" pic="https://www.geosuper.tv/assets/uploads/updates/2020-06-18/5525_2777561_updates.jpg" pic1="https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/AP3_26_2018_000104A-1655488131-1586791403.jpg" />
  </p>
  , document.querySelector('#root'));