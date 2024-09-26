import Logo  from "../../assets/pepperLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull, faGear, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import translateSymbol from '../../assets/translateSymbol.svg'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 px-14 text-white">
      <img src={Logo} alt="peppermint Logo" />

      <div className="flex justify-between items-center text-gray-400">
        <div className="space-x-2 ">
            <button className="border-r border-gray-500 px-4 "><FontAwesomeIcon icon={faTriangleExclamation} /> Errors</button>
            <button className="border-r border-gray-500 px-2"><img src={translateSymbol} alt="" width={18} height={18} className="inline" /> Language</button>
            <button className="px-2"><FontAwesomeIcon icon={faGear} /> Settings</button>
        </div>
        <div className="flex justify-between items-center px-5">
            <div className="flex justify-between items-center px-5">
                <FontAwesomeIcon icon={faBatteryFull} rotation={270} />
                <p>98%</p>
            </div>
            <p>01:34:22</p>
        </div>
      </div>
    </nav>
  )
}
