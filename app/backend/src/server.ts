import { App } from './app';
import trendingReposAtt from './utils/trendingRepoAttOnDB';


import 'dotenv/config';

/* trendingReposAtt(); */
const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);