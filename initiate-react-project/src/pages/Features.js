import "../styles/Features.css"
import Logo from '../logo.svg'

function Features() {

    // Change feature heading, description, and images here
    const features_data = [
        {
            image: Logo,        
            title: "Feature 1",
            text: "Description 1",
        },
        {
            image: Logo,
            title: "Feature 2",
            text: "Description 2",
        },
        {
            image: Logo,
            title: "Feature 3",
            text: "Description 3",
        }
    ];

    return (
        <div>
        <div id="features">
            <div id='features-container'>
                <div id='features-text'>
                    <h1 className="primary-heading">
                        Heading
                    </h1>
                    <p1 className="primary-text">
                        Description
                    </p1>
                </div>

                <div className='frames-container'>
                    {features_data.map((data) => (
                        <div className='features-frames'>
                            <div className='features-frame-img'>
                                <img src={data.image} />
                            </div>
                            <div className='features-frame-text'>
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

export default Features;
