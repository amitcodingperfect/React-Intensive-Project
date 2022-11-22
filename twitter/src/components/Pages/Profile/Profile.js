
import './Profile.css';
import HomeOption from '../../HomeOption/HomeOption';
import LoginOption from '../../LoginOption/LoginOption';
import ProfileMain from '../../ProfileMain/ProfileMain';


function Profile() {

  return(

   <div className='homeContainer'>

        <div className="leftContainer">
         <HomeOption/>
        </div>
        <div className="centerContainer">
     <ProfileMain/>
        </div>
        <div className="rightContainer">
            <LoginOption/>
        </div>

   </div>

       
  )
}

export default Profile;