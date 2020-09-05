import React, {useState} from 'react';
import Header from './components/header/Header';
import styles from './app.module.css';
import SideBar from './components/Sidebar/Sidebar';
import Recommendation from './components/recommendationVideo/Recommendation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import youtube from './api/youtube';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState(null);
  
  // const onVideoSelect = (video) => {
  //   setSelectedVideos(video)
  // }
  
  const handelSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 6,
        key: "AIzaSyCXJxblm0heO8FlyqIFd4IvJh1yTb68_ts",
        q: searchTerm,
      }
    });

    setVideos(response.data.items);
    setSelectedVideos(response.data.items[0])
  }
    return (
        <div className="app">
            <Router>
                <Header onForm={handelSubmit}/>
                <Switch>
                    <Route path="/search/:searchTerm">
                        <SearchPage  video={selectedVideos} videos={videos}/>
                    </Route>
                    <Route path="/">
                        <div className={styles.app__body}>
                            <SideBar/>
                            <Recommendation/>
                        </div>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;