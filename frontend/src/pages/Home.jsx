import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import merchItems from "./merchItems";
import white_left_arrow from "../assets/images/icons/white_left_arrow.png";
import white_right_arrow from "../assets/images/icons/white_right_arrow.png";
import Hero from "../components/Hero";



export default function Home() {

  const navigate = useNavigate();
  const [currentItemPic, setCurrentItemPic] = useState(merchItems[0]);

  const changeHeroImage = (direction) => {
    if (direction === "up" && currentItemPic.picNumber < merchItems.length - 1) {
      setCurrentItemPic(merchItems[currentItemPic.picNumber + 1]);
    } else if (direction === "down" && currentItemPic.picNumber > 0) {
      setCurrentItemPic(merchItems[currentItemPic.picNumber - 1]);
    }
  };

  return <main className="home-page">
    <Hero />
    <div className="picture-box">
      <button onClick={()=>changeHeroImage("down")} className="change-pic-button left"><img className="change-pic-arrow" src={white_left_arrow} alt={"white_left_arrow"} /></button>
      <button><img className="merch-item" src={currentItemPic.photo} alt={currentItemPic.alt} /></button>
      <button onClick={()=>changeHeroImage("up")} className="change-pic-button right"><img className="change-pic-arrow" src={white_right_arrow} alt={"white_right_arrow"} /></button>
    </div>
    <h1 className="direct"><span className="underlined">Or</span> make a <Link aria-label="On Click" to="/request">Request</Link></h1>
    <button className="button" onClick={()=>navigate("/request")}>Special Request</button>
    <h4 className="red">If you want a plushie of a specific character, please include a screenshot (to reduce confusion)</h4>
  </main>
}