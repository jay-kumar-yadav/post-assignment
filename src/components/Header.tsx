import person from '../assets/person.svg'
import search from '../assets/search.svg'
import settings from '../assets/settings.svg'
import chevronDown from '../assets/chevronDown.svg'
const Header = () => {
  return (
    <div className="h-12 w-full flex justify-between items-center px-12 border-b-2 border-black border-opacity-50 font-medium">
        <div className="h-full w-fit flex items-center gap-7">
            <a href="#">Home</a>
            <a href="#">Orders</a>
            <a href="#">Integrations</a>
            <a className="flex" href="#">Tracking Page <img className='pl-2' src = {chevronDown} alt="v"/></a>
            <a href="#">Partner with Us</a>
        </div>
        <div className="h-full w-fit flex items-center gap-7">
            {/* Search */}
            <div className="h-fit w-fit flex border-b-2 border-black gap-2">
                <img src={search} alt="*"/>
                <input className="w-32 h-fit outline-none border-0" type="text" placeholder="Search"/>
            </div>
            {/* Account */}
            <div className="h-fit w-fit flex gap-2">
                <img src={person} alt="*"/>
                <a href='#'>Account</a>
            </div>
            {/* Settings */}
            <div className="h-fit w-fit flex gap-2">
                <img src={settings} alt="*"/>
                <a href='#'>Settings</a>
            </div>
        </div>
    </div>
  )
}

export default Header