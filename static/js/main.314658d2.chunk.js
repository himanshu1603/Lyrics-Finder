(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/spinner.75ae2ba2.gif"},28:function(e,t,a){e.exports=a(60)},57:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),l=a.n(r),s=a(6),o=a(7),i=a(9),m=a(8),u=a(10),p=a(62),d=a(64),h=a(63),b=function(){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-5"},c.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"Lyrics Finder"))},f=a(24),g=a(11),k=a.n(g),E=c.a.createContext(),y=function(e,t){switch(t.type){case"SEARCH_TRACKS":return Object(f.a)({},e,{track_list:t.payload,heading:"Search Results"});default:return e}},v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={track_list:[],heading:"Top 10 Tracks",dispatch:function(e){return a.setState(function(t){return y(t,e)})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=".concat("eb5899c0a727c3257558233f3ba4d70f")).then(function(t){e.setState({track_list:t.data.message.body.track_list})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),_=E.Consumer,N=a(25),j=a.n(N),O=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:j.a,alt:"Loading...",style:{width:"200px",margin:"40px auto",display:"block"}}))},w=a(61),x=function(e){var t=e.track;return c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,t.artist_name),c.a.createElement("p",{className:"card-text"},c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-play"})," Track"),": ",t.track_name,c.a.createElement("br",null),c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-compact-disc"})," Album"),": ",t.album_name),c.a.createElement(w.a,{to:"lyrics/track/".concat(t.track_id),className:"btn btn-dark btn-block"},c.a.createElement("i",{className:"fas fa-chevron-right"})," View Lyrics"))))},S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(_,null,function(e){var t=e.track_list,a=e.heading;return void 0===t||0===t.length?c.a.createElement(O,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"text-center mb-4"},a),c.a.createElement("div",{className:"row"},t.map(function(e){return c.a.createElement(x,{key:e.track.track_id,track:e.track})})))})}}]),t}(n.Component),C=a(12),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={trackTitle:""},a.findTrack=function(e,t){t.preventDefault(),k.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=".concat(a.state.trackTitle,"&page_size=10&page=1&s_track_rating=desc&apikey=").concat("eb5899c0a727c3257558233f3ba4d70f")).then(function(t){e({type:"SEARCH_TRACKS",payload:t.data.message.body.track_list}),a.setState({trackTitle:""})}).catch(function(e){return console.log(e)})},a.onChange=function(e){a.setState(Object(C.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(_,null,function(t){var a=t.dispatch;return c.a.createElement("div",{className:"card card-body mb-4 p-4"},c.a.createElement("h1",{className:"display-4 text-center"},c.a.createElement("i",{className:"fas fa-music"})," Search for a song"),c.a.createElement("p",{className:"lead text-center"},"Get the lyrics for any song"),c.a.createElement("form",{onSubmit:e.findTrack.bind(e,a)},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Song title... ",name:"trackTitle",value:e.state.trackTitle,onChange:e.onChange})),c.a.createElement("button",{className:"btn btn-primary btn-lg btn-block mb-5",type:"submit"},"Get Track Lyrics")))})}}]),t}(n.Component),A=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null),c.a.createElement(S,null))},D=a(26),R=a.n(D),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={track:{},lyrics:{}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(this.props.match.params.id,"&apikey=").concat("eb5899c0a727c3257558233f3ba4d70f")).then(function(t){return e.setState({lyrics:t.data.message.body.lyrics}),k.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(e.props.match.params.id,"&apikey=").concat("eb5899c0a727c3257558233f3ba4d70f"))}).then(function(t){e.setState({track:t.data.message.body.track})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.track,a=e.lyrics;return console.log(t),void 0===t||void 0===a||0===Object.keys(t).length||0===Object.keys(a).length?c.a.createElement(O,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(w.a,{to:"/",className:"btn btn-dark btn-sm mb-4"}," Go Back "),c.a.createElement("div",{className:"card"},c.a.createElement("h5",{className:"card-header"},t.track_name," by ",c.a.createElement("span",{className:"text-secondary"},t.artist_name)),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},a.lyrics_body))),c.a.createElement("ul",{className:"list-group mt-3"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Album ID"),": ",t.album_id),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Song Genre"),":"," ",t.primary_genres.music_genre_list[0].music_genre.music_genre_name),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Explicit Words"),":"," ",0===t.explicit?"No":"Yes"),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Release Date"),":"," ",c.a.createElement(R.a,{format:"DD/MM/YYYY"},t.first_release_date))))}}]),t}(n.Component),Y=(a(57),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(v,null,c.a.createElement(p.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(b,null),c.a.createElement("div",{className:"container"},c.a.createElement(d.a,null,c.a.createElement(h.a,{exact:!0,path:"/",component:A}),c.a.createElement(h.a,{exact:!0,path:"/lyrics/track/:id",component:F}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.314658d2.chunk.js.map