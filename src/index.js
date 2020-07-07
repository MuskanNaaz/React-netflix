import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from "./Cards";
ReactDOM.render( 
<>
<h1 className="heading_style">List of Top 6 Netflix bollywood Series 2020</h1>

<Card imgsrc="https://www.gstatic.com/tv/thumb/v22vodart/14664464/p14664464_v_v8_aa.jpg"
title="A Netflix original Series"
sname="dark"
link="https://www.youtube.com/watch?v=J_yb8HORges"/>


<Card imgsrc="https://cdn.bollywoodmdb.com/movies/largethumb/2019/hindi-medium-2/poster.jpg"
title="A Netflix original Series"
sname="Angrezi Medium"
link="https://www.bollywoodmdb.com/movies/broadband/angrezi-medium-official-trailer"/>

<Card imgsrc="https://cdn.bollywoodmdb.com/movies/largethumb/2019/baaghi-3/baaghi-3-poster-7.jpg"
title="A Netflix original Series"
sname="Baaghi-3"
link="https://www.bollywoodmdb.com/movies/broadband/baaghi-3-official-trailer"/>

<Card imgsrc="https://cdn.bollywoodmdb.com/movies/largethumb/2020/thappad/poster.jpg"
title="A Netflix original Series"
sname="Thappad"
link="https://www.bollywoodmdb.com/movies/broadband/thappad-official-trailer"/>

<Card imgsrc="https://cdn.bollywoodmdb.com/movies/largethumb/2020/doordarshan/poster.jpg"
title="A Netflix original Series"
sname="dark"
link="https://www.bollywoodmdb.com/movies/broadband/doordarshan-official-trailer"/>

<Card imgsrc="https://cdn.bollywoodmdb.com/movies/largethumb/2019/gulabo-sitabo/poster.jpg"
title="A Netflix original Series"
sname="Gulabo Sitabo"
link="https://www.bollywoodmdb.com/movies/broadband/gulabo-sitabo-official-trailer-2"/>

</>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
