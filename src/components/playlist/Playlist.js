import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Playlist() {
  const [PlayList, setPlayList] = useState([])
  useEffect(() => {
    getplaylist();
  }, [])

  const getplaylist = () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
      params: {
        id: '37i9dQZF1DX4Wsb4d7NKfP',
        offset: '0',
        limit: '100'
      },
      headers: {
        'X-RapidAPI-Key': '812374127dmsh4099588bf00b2e2p1f8aa4jsn0f641d0a303e',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      axios.request(options).then(
        response => {
          setPlayList(response.data.items)
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='col'>
      <div className='row'>
        <div className="card bg-dark text-white">
          <img src="" className="card-img" alt="..." />
          <div className="card-img-overlay">
            <p>Artist</p>
            <h2 className="card-title">On The Top</h2>
            <button className="btn btn-primary">Play</button>
            <button className="btn btn-primary">Follow</button>
          </div>
        </div>
      </div>

      <div className='my-5'>
        <ul className="list-group">
          {PlayList.map((item) => {
              if (item.track == null) {
                //
              } else {
                return (
                  <li key={item.track.external_ids.isrc} className="list-group-item bg-transparent text-white m-3 border-0">
                    <div className='row'>
                      <div className='col'>{item.track.name}</div>
                      <div className='col text-end'>
                        <audio controls>
                          <source type='audio/mp3' src={item.track.preview_url}></source>
                        </audio>
                      </div>
                    </div>
                  </li>
                )
              }
            }
            )}
        </ul>
      </div>
    </div>
  )
}

export default Playlist
