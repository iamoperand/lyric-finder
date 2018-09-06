import { productionConstants } from './constants';


const { MM_KEY } = productionConstants;

const MUSIXMATCH_API_URL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/';

const routes = {
  topTracks: `${MUSIXMATCH_API_URL}chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${MM_KEY}`,
  lyricsByID: `${MUSIXMATCH_API_URL}track.lyrics.get?apikey=${MM_KEY}&track_id=`,
  trackByID: `${MUSIXMATCH_API_URL}track.get?apikey=${MM_KEY}&track_id=`,
};


export default routes;
