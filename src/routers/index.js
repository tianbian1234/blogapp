import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Index from '../components/index';

import Blog from '../pages/blog';
import BlogSignal from '../pages/blog/blog';

import EditorBlog from '../pages/editorblog';
import Echarts from '../pages/echarts';
import Upload from '../pages/upload';
import ImageLB from '../components/swiper';
import TestZSQ from '../pages/testZSQ';
import Login from '../pages/login';
import MapTest from '../components/geo3d';


const BasicRoute = () => {
    return (
    <Router>
        <div className='container'>
            <Route path={'/'} exact component={Index} />
            <Route path={'/login'} component={Login}/>
            <Route path={'/blog'} component={Blog} />
            <Route path={'/blogSignal/:id'} component={BlogSignal} />
            <Route path={'/editorblog'} component={EditorBlog} />
            <Route path={'/echarts'} component={Echarts} />
            <Route path={'/upload'} component={Upload} />
            <Route path={'/lunbo'} component={ImageLB} />
            <Route path={'/test'} component={TestZSQ} />
            <Route path={'/map'} component={MapTest} />
        </div>
    </Router>)
}

export default BasicRoute
