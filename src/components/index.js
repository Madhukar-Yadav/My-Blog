import {lazy} from 'react';

import Header from 'components/Header';
import Banner from 'components/Banner';
import Skills from 'components/Skills';
import Loading from 'components/Loading';
import Joke from 'components/Joke';

const Home = lazy(() => import('components/Home'));
const NotFound = lazy(() => import('components/NotFound'));

export {
    Home,
    Loading,
    NotFound,
    Header,
    Banner,
    Skills,
    Joke
};