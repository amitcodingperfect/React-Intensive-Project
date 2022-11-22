
import './Home.css';
import HomeOption from '../../HomeOption/HomeOption';
import LoginOption from '../../LoginOption/LoginOption';
import Feed from '../../Feed/Feed';

function Home() {

  return(

   <div className='homeContainer'>

        <div className="leftContainer">
         <HomeOption/>
        </div>
        <div className="centerContainer">
        <Feed/>
        </div>
        <div className="rightContainer">
            <LoginOption/>
        </div>

   </div>

       
  )
}

export default Home;