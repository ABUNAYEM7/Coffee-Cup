import { Link } from 'react-router-dom'
import navLogo from '../assets/more/2.png'

const Navbar = () => {
  return (
    <div className="navbar justify-center items-center gap-10 bg-primary text-white">
  <div className="">
    <Link className="md:text-5xl text-3xl font-bold">
    Yebuna Alem 
    </Link>
  </div>
  <div className="gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-30  rounded-full">
          <img
            alt="Brand logo"
            src={navLogo} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-primary">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Navbar
