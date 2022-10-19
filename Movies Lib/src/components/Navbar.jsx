import { Link, Outlet } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav id="navbar">
            {/* <Link to="/"><BiCameraMovie /> MoviesLib</Link>

            <form>
                <input type="text" name="" id=""  placeholder='Busque um filme' />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>

            <Outlet /> */}
        </nav>
    )
}

export default Navbar;