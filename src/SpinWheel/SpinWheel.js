import './SpinWheel.css'
import Marker from '../assets/marker.svg'
const SpinWheel = () => {
    return(
        <div className='spinWheel'>
        <div className='wheel-container'>
            <img src={Marker} alt='marker' className='marker'/>
            <div className='wheel-content'>
                <div className='wheel'>
                <div className='prize-container'>
                    <div className='prize-name' style={{top: '12px',left: '-18px'}}>
                        Sanity Offer
                    </div>
                    <div className='desc-container'>
                        <img alt="" class="logo" src="https://jiokbc.akamaized.net/testing/jcn_i-1a9b391e-dc6c-4f53-968a-e66fc01af863.png"/>
                    </div>
                </div>
                <div className='prize-container'>
                    <div className='prize-name' style={{top: '12px',left: '-18px'}}>
                        TIARA JWELL
                    </div> 
                    <div className='desc-container'>
                        <img alt="" class="logo" src="https://jiokbc.akamaized.net/testing/jcn_i-1dde770b-b731-4667-ae42-d9ec6d0351b8.jpg"/>
                    </div>
                </div>
                <div className='prize-container'>
                    <div className='prize-name' style={{top: '12px',left: '-18px'}}>
                            Lucky Draw
                        </div> 
                        <div className='desc-container'>
                            <img alt="" class="logo" src="https://jiokbc.akamaized.net/testing/jcn_i-1dde770b-b731-4667-ae42-d9ec6d0351b8.jpg"/>
                        </div>
                </div>
                <div className='prize-container'>
                    <div className='prize-name' style={{top: '12px',left: '-18px'}}>
                        Prize
                    </div> 
                    <div className='desc-container'>
                        <img alt="" class="logo" src="https://jiokbc.akamaized.net/testing/jcn_i-1dde770b-b731-4667-ae42-d9ec6d0351b8.jpg"/>
                    </div>
                </div>
                <div className='prize-container'>
                    <div className='prize-name' style={{top: '12px',left: '-18px'}}>
                        Prize
                    </div> 
                    <div className='desc-container'>
                        <img alt="" class="logo" src="https://jiokbc.akamaized.net/testing/jcn_i-1dde770b-b731-4667-ae42-d9ec6d0351b8.jpg"/>
                    </div>
                </div>
                <div className='prize-container'>
                    <div className='prize-name' style={{top: '12px',left: '-18px'}}>
                        Prize
                    </div> 
                    <div className='desc-container'>
                        <img alt="" class="logo" src="https://jiokbc.akamaized.net/testing/jcn_i-1dde770b-b731-4667-ae42-d9ec6d0351b8.jpg"/>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </div>
    )
}


export default SpinWheel