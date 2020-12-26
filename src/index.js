import * as $ from 'jquery';
import Post from '@models/Post';
import './styles/styles.css';
import json from '@/assets/json';
import WebpackLogo from '@/assets/webpack-logo.png';
import xml from '@/assets/data.xml';
import csv from '@/assets/data.csv';
import './styles/sass.scss';
import './styles/less.less';

const post = new Post('Webpack post title', WebpackLogo);
$('pre').html(post.toString());
console.log('post', post.toString());
console.log('JSON:', json);
console.log('XML:', xml);
console.log('csv:', csv);