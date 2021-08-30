import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

import SearchBar from './component/SearchBar';
import { AlbumPage } from './pages/AlbumPage';
import { ArtistPage } from './pages/ArtistPage';
import { StreamingPage } from './pages/StreamingPage';

import './style.css';

const Home = () =>{

    return (
        <div>
            <div> 
                <SearchBar/>
            </div>
            <div id="body">
                <BrowserRouter>
                        <div>
                            <div className="artista">
                                <Link to="/artistas">Artistas</Link>
                            </div>
                            <div className="albun">
                                <Link to="/album">Álbuns</Link>
                            </div>
                            <div className="stream">
                                <Link to="/streaming">Serviços de Streaming</Link>
                            </div>
                        </div>
                        <Switch>
                            <Route path="/artistas">
                                <ArtistPage/>
                            </Route>
                            <Route path="/album">
                                <AlbumPage/>
                            </Route>
                            <Route path="/streaming">
                                <StreamingPage/>
                            </Route>
                        </Switch>
                </BrowserRouter>
                  
            </div>
        </div>
    );
}

export default Home;