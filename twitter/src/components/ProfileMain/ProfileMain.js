

import './ProfileMain.css'
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Trending from '../Feed/FeedHome/Trending';
import Tweet from '../Tweet/Tweet';

function ProfileMain(){
    const [trendings, setTrendings]=useState([]);
    const [tweets, setTweets]=useState([]);
    useEffect(()=>{
        fetch("trendingData.json" ).then(res=> res.json()).then(res=>{
                   
                    setTrendings(res);
                    console.log(res);
        
                });
        },[]);
        
        useEffect(()=>{
            fetch("tweet.json" ).then(res=> res.json()).then(res=>{
                       
                        setTweets(res);
                        console.log(res);
            
                    });
            },[]);
    return (
       <div className="profile-main">
       <div className="cover">
       <img className="profile-img" src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" alt="profile"></img>
       </div>
       <div className="follow-btn-container fw-bold float-end">
            <button className="follow-btn">Follow</button>
            </div> 
            <div className='trend-class'>
            {
            trendings.map(trending=>
                <Trending data={trending} />
            )}

            <hr />
            {
            tweets.map(tweet=>
                <div>
                <Tweet data={tweet} />
                </ div>
                  
            )}
          </div>
       </div>

    )
}
export default ProfileMain;