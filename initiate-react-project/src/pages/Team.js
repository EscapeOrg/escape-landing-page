import "../styles/Team.css"
import Logo from '../logo.svg'
import Hyeseong from "../assets/Hyeseong.jpeg";
import Christine from "../assets/Christine.jpeg";
import Alex from "../assets/Alex.jpeg";
import Hamza from "../assets/Hamza.jpeg";

function Team() {

    // Change feature heading, description, and images here
    const team_data = [
        {
            image: Hyeseong,        
            title: "Hyesong Jun",
            text: "Co-Founder & CEO",
        },
        {
            image: Christine,
            title: "Jihee Choi",
            text: "Co-Founder & CTO",
        },
        {
            image: Alex,
            title: "Alex Oh",
            text: "Software Developer",
        },
        {
            image: Hamza,
            title: "Hamza Mostafa",
            text: "Software Developer",
        },

    ];

    return (
        <div>
        <div id="team">
            <div id='team-container'>
                <div id='team-text'>
                    <h1 className="primary-heading">
                        Meet our Team
                    </h1>

                </div>

                <div className='team-container'>
                    {team_data.map((data) => (
                        <div className='team-frames'>
                            <div className='team-frame-img'>
                                <img src={data.image} />
                            </div>
                            <div className='team-frame-text'>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Team;
