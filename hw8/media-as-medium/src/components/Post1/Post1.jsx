import iconka from '../../images/iconka.png'
import ico1 from '../../images/Ico1.png'
import img0 from '../../images/Img0.png'
import './style.css'

export default function Post1(){
    return (
        <div className="first" >
            <div className="block">
                <div className="left_content">
                    <div className="author_div">
                        <img src={iconka} alt="icon" className="icon_img" />
                        <p className="Author_name">Authors name <span className="gray_font">in</span> Topics name ⋅ <span className="gray_font">7 july</span></p>
                    </div>
                    <p className="title">7 Practical CSS Tips</p>
                    <p className="description">You not only learn more Python by implementing what you already know but, in the end,
                        you can see how all your hard work pays off.</p>
                    <div className="bottom">
                        <div className="left_side">
                            <button className="btn_java">Java Script</button>
                            <p id="min" className="gray_font">12 min read </p>
                            <p>⋅</p>
                            <p id="sel" className="gray_font">Selected for you</p>
                        </div>
                        <div className="right_side">
                            <img src={ico1} alt="" />
                            <img src={ico1} alt="" />
                            <img src={ico1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right_content">
                    <img src={img0} alt="main" className="main_img" />
                </div>
            </div> 
            <hr />
        </div>
    )
}