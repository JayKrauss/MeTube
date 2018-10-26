import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/searchbar/searchbar';
import VideoList from './components/videolist/videolist';
import VideoDetail from './components/videodetail/videodetail'

import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyD7IkI0964gt1mLmAj9lcG53ISAyJ9meSQ';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('World of Tanks');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0] 
        });
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div className="App">
        <header className="App-header">
          <div className='container'>
          <span id='title1'>Me</span><span id='title2'>Tube!</span> 
            <div className='row'>
            <div className='col-md-12'>
             <SearchBar onSearchTermChange={videoSearch}/> 
             </div>
             </div>
             <br />
            <div className='row'>
            <div className='col-md-8'>
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='col-md-4'>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
            </div>
           </div>
        </div> 
        </header>
      </div>
    );
  }
}

export default App;
