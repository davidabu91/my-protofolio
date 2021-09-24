import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import SinglePost from './components/SinglePost.jsx';
import Post from './components/Post.jsx';
import Project from './components/Project.jsx';
import NavBar from './components/NavBar.jsx'

function App() {
    return ( <BrowserRouter>
    <NavBar/>
        <Switch>
        <Route component = { Home }
        path = '/'
        exact />
        <Route component = { About }
        path = '/about' />
        <Route component = { SinglePost }
        path = '/post/:slug' />
        <Route component = { Post }
        path = '/post' />
        <Route component = { Project }
        path = '/project' />
        </Switch> 
        </BrowserRouter>
    )
}

export default App;