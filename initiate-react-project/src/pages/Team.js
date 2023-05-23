import "../styles/Team.css";
import Hyeseong from "../assets/Hyeseong.jpeg";
import Christine from "../assets/Christine.jpeg";

function Team() {

    // Change team heading, description, and images here
    const team_data = [
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
        <div id='team'>
            <div id='team-text-container'>
                <div id='team-text'>
                    <h1 className='primary-heading'>
                        Meet our team
                    </h1>
                    <p1 className='primary-text'>
                        Description
                    </p1>
                </div>
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
    );
}

export default Team;
