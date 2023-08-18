import React, { useEffect, useState } from 'react'
import Theme from '../../assets/theme.jpg'
import axios from 'axios'

function Podcast() {
  const [podcast, setPodcast] = useState([])
  useEffect(() => {
    getpodcast();
  }, [])

  const getpodcast = () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/podcast_episodes/',
      params: {
        id: '0ofXAdFIQQRsCYj9754UFx',
        offset: '0',
        limit: '50'
      },
      headers: {
        'X-RapidAPI-Key': '812374127dmsh4099588bf00b2e2p1f8aa4jsn0f641d0a303e',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      axios.request(options).then(
        response => {
          setPodcast(response.data.data.podcastUnionV2.episodesV2.items)
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='col'>
      <div className='row text-center'>
        <h1 className='text-white lh-lg'>Listen  Best Podcast </h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur </p>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 gs-5'>
        {podcast.map((i) => {
          return (
            <div className='col' key={i.uid}>
              <div className="card">
                <img src={Theme} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-text">{i.entity.data.name}</h5>
                  <a className='podcastbtn' href='spotify:episode:7IOPvMrzVWcEkZizTogejP'>Link</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Podcast

