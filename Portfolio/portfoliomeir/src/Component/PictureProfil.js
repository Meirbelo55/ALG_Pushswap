import React, {Component} from "react";
import MeirPicture from './picture/meir_belaich.jpg';
class PictureProfile extends Component {
    render() {
        return (
            <div className='profilpicture'>
                <img src={MeirPicture} alt='Meirprofil'/>
            </div>
        )
    }
}
export default PictureProfile;