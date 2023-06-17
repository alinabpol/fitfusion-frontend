import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
  {
    url: 'https://fitfusion.s3.us-west-1.amazonaws.com/Screenshot+2023-06-16+at+3.17.35+PM.png',
    caption: 'Custom recipes for every day',
    link: '/nutrition',
  },
  {
    url: 'https://fitfusion.s3.us-west-1.amazonaws.com/Screenshot+2023-06-16+at+3.38.04+PM.png',
    caption: 'Find a workout that suits your needs',
    link: '/workouts',
  },
  {
    url: 'https://fitfusion.s3.us-west-1.amazonaws.com/Screenshot+2023-06-16+at+3.00.36+PM.png',
    caption: 'Check your activity with our analytics dashboard',
    link: '/analytics',
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img className="img-slider" style={{ width: '100vw', height: '90vh' }} src={fadeImage.url} alt="" />
            <div className="caption-container">
              {/* <h2 className="captions-slider">{fadeImage.caption}</h2> */}
              <h2 className={`captions-slider ${index === 1 ? 'white-caption' : ''}`}>{fadeImage.caption}</h2>
              <a href={fadeImage.link} target="_blank" rel="noopener noreferrer">
                <button className="button-styled btn-h btn-slider">LET'S GO</button>
              </a>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;