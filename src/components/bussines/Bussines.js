import "./bussines.css"
import Star from "../../assets/Star.png"
import Send from "../../assets/Send.png"

const Bussines = () => {
    return (
        <div className="bussines_container">

            <div className="bussines_left">
                <h1>
                Lorem ipsum dolor sit amet, consectetur.
                </h1>
                <p>
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip.ex ea commodo consequat.
                   
                </p>
            </div>
            <ul className="bussines_right">
                <li className="bussines_right-content">
                    <span><img src={Star} alt="star" /></span>
                    <div>
                        <h3>Lorem ipsum</h3>
                        <p>Tempor incididunt ut labore et dolore magna aliqua.Tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li className="bussines_right-content">
                    <span><img src={Send} alt="star" /></span>
                    <div>
                        <h3>Lorem Secured</h3>
                        <p>Tempor incididunt ut labore et dolore magna aliqua.Tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                </li>
                <li className="bussines_right-content">
                    <span><img src={Star} alt="star" /></span>
                    <div>
                        <h3>Lorem ipsum</h3>
                        <p>Tempor incididunt ut labore et dolore magna aliqua.Tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
            </ul>
        </div>




    )
}

export default Bussines