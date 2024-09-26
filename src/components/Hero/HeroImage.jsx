import roboImage from '../../assets/roboImage.png'
import logoBg from '../../assets/logobg.png'

export default function HeroImage() {
    return (
        <div className='relative flex items-center w-1/2 h-full'>
            <img src={roboImage} alt=" Robot Image" className='absolute z-10' />
            <img src={logoBg} alt="Robot Background" className='absolute z-0 left-4' />
        </div>
    )
}
