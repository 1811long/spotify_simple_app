import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

const style = {
    position: "absolute",
    top: "0px",
    width: "100%",
    left: "0px"
};

const Player = () => {
    const track_playing_uri = useSelector(state => state.app.nowPlayingTrack)
    return (
        <div style={style}>
            <AudioPlayer
                autoPlay
                src={track_playing_uri}
                onPlay={(e) => {}}
                onPause={(e) => {}}
            />
        </div>
    )
}

export default Player