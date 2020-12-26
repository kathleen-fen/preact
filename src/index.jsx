import * as $ from 'jquery';
import './babel';
import Post from '@models/Post';
import './styles/styles.css';
import json from '@/assets/json';
import WebpackLogo from '@/assets/webpack-logo.png';
import xml from '@/assets/data.xml';
import csv from '@/assets/data.csv';
import './styles/sass.scss';
import './styles/less.less';

import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack post title', WebpackLogo);
//$('pre').html(post.toString());

const App = () => (<div>
    <h2>Hello react!!!</h2>
    <p>This is react component!!!</p>
</div>);

render(<App />, document.getElementById('app'));
console.log('post', post.toString());
console.log('JSON:', json);
console.log('XML:', xml);
console.log('csv:', csv);