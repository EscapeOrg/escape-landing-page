import "../styles/Founders.css";
import Hyeseong from "../assets/Hyeseong.jpeg";
import Christine from "../assets/Christine.jpeg";

function Founders() {

    // Change founders heading, description, and images here
    const founders_data = [
        {
            image: Hyeseong,        
            title: "Hyeseong Jun",
            text: "Co-Founder",
        },
        {
            image: Christine,
            title: "Christine Choi",
            text: "Co-Founder",
        },

    ];

    return (
        <div id='founders'>
            <div id='founders-text-container'>
                <div id='founders-text'>
                    <h1 className='primary-heading'>
                        Meet our Co-Founders
                    </h1>
                    <p1 className='primary-text'>
                        Description
                    </p1>
                </div>
            </div>

            <div className='founders-container'>
                {founders_data.map((data) => (
                    <div className='founders-frames'>
                        <div className='founders-frame-img'>
                            <img src={data.image} />
                        </div>
                        <div className='founders-frame-text'>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Founders;
