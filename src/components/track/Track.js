import Banner from '../../assets/banner.png'
import Card from './card'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Track() { // track is a function
  const [TrackList, settracklist] = useState ([])  //TrackList is a variable to stor settracklist, Settracklist is a function, useState is used to store data 
  useEffect(()=> {  // use effect is used to make changes, We have created arrow function which is down  
    getTrack(); // this is a function
  }, []) // blamk array to get the data using their index 

  const getTrack = () => {  // this is a function we have called up
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/tracks/',
      params: {
        ids: '4WNcduiCmDNfmTEz7JvmLv'
      },
      headers: {
        'X-RapidAPI-Key': '812374127dmsh4099588bf00b2e2p1f8aa4jsn0f641d0a303e',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
     axios.request(options).then(
      response => {
        settracklist(response.data.tracks[0])
      }
     )
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h4 className='m-0 p-3 lh-lg text-uppercase fw-normal text-white'>Track PAge</h4>
      <div className='card text-bg-dark position-relative'>
        <img src={Banner} className='card-img object-fit-cover blur' height={260} alt='...' />
        <div className='card-img-overlay top-50 button-0'>
          <div className='row align-item-center'>
            <div className='col'>
              <h5>{TrackList.name}</h5>
              <h3>On Repeat</h3>
            </div>
            <div className='col text-end px-4'>
              <audio controls>
                <source type='audio/mp3' src={TrackList.preview_url}></source> 
              </audio>
            </div>
          </div>
        </div>
      </div>
      <Card></Card>
    </div>
  )
}

export default Track
