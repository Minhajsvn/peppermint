import HeroImage from './HeroImage'
import HeroPassCode from './PassCodeSection/HeroPassCode'

export default function Hero() {
    return (
        <div className='flex justify-between items-center w-screen h-full py-20'>
            <HeroPassCode />
            <HeroImage />
        </div>
    )
}
