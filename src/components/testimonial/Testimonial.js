import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"
import testimonial from "../../assets/testimonial.png"
import "./testimonial.css"
const Testimonial = () => {
    return (
        <div className="testimonial_container">
            <div className="testimonial_left">
                <img className="main_img" src={testimonial} alt="testimonial" />
            </div>
            <div className="testimonial_right">
                <h1>
                    Easily control your
                    billing & invoicing
                </h1>
                <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div>
                    <div>
                        <img src={google} alt="google" />
                        <img src={apple} alt="apple" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial