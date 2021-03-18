
import './homepage.css';
import HomepageName from '../../images/commonImages/nameWithDate.jpg';
import HomepageMario from '../../images/commonImages/homepageMario.jpg';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
     
     <div className="homepage">
         <img src={HomepageName} className="homepage-name"/>
         <p className="press-button-mario">Click Here</p>
         <img src={HomepageMario} className="homepage-mario"/>
        
     </div>
    );
  }

  export default Homepage