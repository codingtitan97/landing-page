import comma from "../../assets/comma.png";
import user from "../../assets/user.png";
import "./feedback.css";
const Feedback=()=>{
    return(
    <div className="feedback_container">
    <div className="feedback_div">
       <img className="comma-img" src={comma} alt="comma"/>
        <div className="comment_div">
        Tempor incididunt ut labore et dolore magna aliquaTempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="user_div">
        <img className="user-img" src={user} alt="user"/>
        <div className="name-div">
        <h6>Herman Jensen</h6>
        <p>Founder & Leader</p>
        </div>
        </div>
    </div>
    <div className="feedback_div">
       <img className="comma-img" src={comma} alt="comma"/>
        <div className="comment_div">
        Tempor incididunt ut labore et dolore magna aliquaTempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="user_div">
        <img className="user-img" src={user} alt="user"/>
        <div className="name-div">
        <h6>Herman Jensen</h6>
        <p>Founder & Leader</p>
        </div>
        </div>
    </div>
    <div className="feedback_div">
       <img className="comma-img" src={comma} alt="comma"/>
        <div className="comment_div">
        Tempor incididunt ut labore et dolore magna aliquaTempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="user_div">
        <img className="user-img" src={user} alt="user"/>
        <div className="name-div">
        <h6>Herman Jensen</h6>
        <p>Founder & Leader</p>
        </div>
        </div>
    </div>
    </div>
    )
}
export default Feedback;