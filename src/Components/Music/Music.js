import React from 'react';
import Som from './sound/song1.mp3'
import Imgsom from './sound/som.png'
import Imgsom2 from './sound/mute.png'


class AudioPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Value: false
        }
    }
componentWillMount(){
    this.aud_play.bind(this)
  
}
    aud_play() {
        const {Value} = this.state
        var myAudio = document.getElementById('myTune')
        
        if (Value == true) {
            myAudio.pause();
            this.setState({Value:false})
            document.getElementById('somimg').setAttribute("src",`${Imgsom2}`)
        } else {
            myAudio.play();
            this.setState({Value:true})
            document.getElementById('somimg').setAttribute("src",`${Imgsom}`)
        }
    }
    render() {
        return (
            
            <div className ="DivSom">
                <audio  ref="audio_tag" src={Som} id="myTune"  autoPlay />
                <img src={Imgsom} id="somimg" onClick={this.aud_play.bind(this)}/>
            </div>
        );
    }
}

export default AudioPlayer;