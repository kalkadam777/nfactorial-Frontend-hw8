import iconka from '../../images/iconka.png'
import ico1 from '../../images/Ico1.png'
import img0 from '../../images/Img2.png'
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
                    <p className="description">Recently, I've been automating tasks more than often due to my lack of time. Thanks to that
                        I have 5 new projects that I classified as beginner, intermediate, and advanced.
                        You'll find links to the full scripts and tutorials to solve each project. Also, l'm leaving a
                        challenge to each of them to test your Python skills. To make things easier, I already created
                        a template for a cover letter. Here's how the template we'll use looks...</p>
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