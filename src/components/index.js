import {lazy} from 'react';

import Header from './styled-components/Header';
import Banner from './styled-components/Banner';
import Skills from './styled-components/Skills';
import Loading from './styled-components/Loading';
import Joke from './styled-components/Joke';

const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));

export {
    Home,
    Loading,
    NotFound,
    Header,
    Banner,
    Skills,
    Joke
};