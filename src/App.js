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

  const onPressed = (video) => {
    setSelectedVideos(video)
  }
  
  const handelSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 6,
        key: "AIzaSyB_wRlgckaN5EDyGD_2cBxqWRUbN7Z4kIQ",
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
                        <SearchPage onPressed={onPressed}  video={selectedVideos} videos={videos}/>
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