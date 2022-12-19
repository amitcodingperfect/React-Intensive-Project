
import { Link } from 'react-router-dom';
import NewTweet from '../NewTweet/NewTweet';
import './HomeOption.css';
import ProfileMain from '../ProfileMain/ProfileMain';


function HomeOption(){

    return(
        <div className="optionContainer">
            <Link to='/'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAATlBMVEX///9VrO5Nqe1Hp+31+v7k8fzt9v3r9P1dsO/7/f++3fjf7vtjsu+p0vWhzvW62/eGwfLG4flvt/CLxPJ7vPGYyvQzoezS5/q12PfZ6/u/47bsAAADQElEQVRoge2Z2ZarKhCGFYzigAOCw/u/6MGYthMHKArT+1zwXfTqtTT8UNQAZRQFAoFAIBAIBAKBQOCfkWdjw/nUlenfaz9qQegKa7t89/S7E8paSuINQqvi4zFXziPC55vz4U37Ca3KbRxO6cNZXTTAF1NJ4wOEdMuzZOz1v72z+EjJCHoxE/uFv5bfPJqekeVh5qze65/NgPeSC/Fl+1dnoFAjvrFYkwIm3V6Jb5No3cXL515S6+q7kz3/3IBVvNwHoZFmHXX1nWtyZhNXWjbtZO0iHtUvgxJufG2yLX1Ky0YyKpzEI/WzndQULomwiAutTAmpHJPdpq4Tx3WumG1LfxmwvBzBpq71L61f2xweJx7x93GJuEg8EqLuLr6LJELUWegnFUC7guSsHemwGyTmR89JbfGmfyfd06zmYFMSq71+ZlXHJLoFftxSMogucVR3yzK/I58ORlg//lrAvu9Y9Y+Y+5yA5GO22sCWbPDqBpeiNBZtzYtZfk09KoyJjJCf+m18y1wmTHBYHjWBOVlonvlJectTS4W+QMpRO1btre6eZRdafSvo+ag81QnuHrFUL+1XoBpmgDkdqDbMDg9eukSJH6oMUh0b7vbyBQDp8vq86LvlC0NiFzoluUE8jpHigMOyHXyWj3LQoc2sDruHnvLwdjxktK/Mnosn7i2LD3m/oCeI0+w7WeXjeo6XtyN5TdDmp4V9fBsPxZATqLCpZlv68iftWtTS8YeqF7xVSvUCF3q+S49KffdG2p1OvuLAS+o5/uL4hGNr+MCocQGPvT3uyC+bgWbcO7OnJBVC/o5Eg5Y39rlc5VvXvffOch80zGn5iHa8kWRaen5Q8ds2/Ze5loxBUu4dSe6UEaDuX1zOySFH/G+Jz2efX/7I7GkPuc9+R3zuD9+8TiDM8xh5xmMSoGij8t5PjnmSjVzGoB4CIdzn7vBGU/Np4rVqq6U1B4KI+6zexYPTmYre7G4dg5cWepvRN/JCwHpGlPFbS9qP/tgy2wQokcXXPq5njYwvd1/7heC4biCYtFNs2NXXpUE8xH1xcx2/oizqXopngWVMyL4u5rv9zEaeJwv5X+sGAoFAIBAIBAKBQOD/wn/dqyIsTLYsqAAAAABJRU5ErkJggg=="></img>
            </Link>
            <a id="ProfileMain" href="/Profile">#&nbsp;&nbsp;Profile</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building-gear" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z"/>
            <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm4.386 1.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
            </svg>&nbsp;&nbsp;Settings</a>
            <NewTweet/>
            </div>
        
    )
}

export default HomeOption;