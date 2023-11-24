// import { useState } from "react";
// import white_left_arrow from "../assets/images/icons/white_left_arrow.png";
// import white_right_arrow from "../assets/images/icons/white_right_arrow.png";
import owner from "../assets/images/owner.jpg";


export default function Hero() {

  // const [currentItemPic, setCurrentItemPic] = useState(merchItems[0]);

  // const changeHeroImage = (direction) => {
  //   if (direction === "up" && currentItemPic.picNumber < merchItems.length - 1) {
  //     setCurrentItemPic(merchItems[currentItemPic.picNumber + 1]);
  //   } else if (direction === "down" && currentItemPic.picNumber > 0) {
  //     setCurrentItemPic(merchItems[currentItemPic.picNumber - 1]);
  //   }
  // };

  return <section className="hero-section">
    <p className="speech">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur optio illo amet, hic corrupti maiores nihil porro dolore quaerat, pariatur eos sit. Non porro cupiditate nobis, similique possimus ratione totam.</p>
    <img src={owner} alt="CEO" className="ceo-pic" />
    {/* <div className="picture-box">
      <button onClick={()=>changeHeroImage("down")} className="change-pic-button left"><img className="change-pic-arrow" src={white_left_arrow} alt={"white_left_arrow"} /></button>
      <button><img className="merch-item" src={currentItemPic.photo} alt={currentItemPic.alt} /></button>
      <button onClick={()=>changeHeroImage("up")} className="change-pic-button right"><img className="change-pic-arrow" src={white_right_arrow} alt={"white_right_arrow"} /></button>
    </div> */}
  </section>
}