import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Album() {
  const [album, setAlbum] = useState([])
  useEffect(() => {
    getalbum();
  }, [])

  const getalbum = () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/album_tracks/',
      params: {
        id: '3IBcauSj5M2A6lTeffJzdv',
        offset: '0',
        limit: '300'
      },
      headers: {
        'X-RapidAPI-Key': '812374127dmsh4099588bf00b2e2p1f8aa4jsn0f641d0a303e',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      axios.request(options).then(
        response => {
          setAlbum(response.data.data.album.tracks.items)
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='container-fluid'>
      <h1 className='text-white'>Album Page</h1>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
        {album.map((item) => {
          return (
            <div className='col' key={item.uid}>
              <div className="card" style={{ "width": '18rem' }}>
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.track.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Album
