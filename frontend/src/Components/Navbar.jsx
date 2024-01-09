import { useContext } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {

    const { state, Logout } = useContext(AuthContext)
    const rout = useNavigate()

    return (
        <div className="navbarScreen">
            <div onClick={() => rout("/")} className='navbarLeft'>HOME</div>
            <div className='navbarMid'>
                {state?.user?.id &&
                    <div className='semiNavbarMid2'>
                        <div onClick={() => rout("/yourproducts")}>YOUR PRODUCTS</div>
                        <div onClick={() => rout("/addproduct")}>ADD PRODUCTS</div>
                    </div>}
            </div>
            <div className='navbarRight'>
                {state?.user?.id ?
                    <>
                        <p>{state?.user?.name}</p>
                        <div onClick={Logout}>LOGOUT</div>
                    </>
                    :
                    <div onClick={() => rout("/login")}>LOGIN</div>
                }


            </div>
        </div>
    )
}

export default Navbar