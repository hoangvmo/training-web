import { Container } from '../container'
import { Logo } from '../../assets/svg'
import { useMemo } from 'react'
import { KEY, authServices } from '../../services/auth'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate();
  const userInfo = useMemo(() => {
    return localStorage.getItem(KEY.USER_INFO);
  }, [])

  return (
    <div className="mt-0" style={{ backgroundColor: 'white' }}>
      <Container>
        <div className="flex row items-center header w-full justify-between">
          <a href='/' className='ml-0'>
            <img src={Logo} alt="logo-svg" />
          </a>
          <ul className="text-black menu--header">
            <li><a href='#!'>Home</a></li>
            <li><a href='#!'>Service</a></li>
            <li><a href='#!'>About</a></li>
            <li><a href='#!'>Contact</a></li>
          </ul>
          {userInfo ? (
            <div className="flex mr-0">
              <button style={{backgroundColor: 'transparent'}} className="mr-0" onClick={() => {
                authServices.logout();
                navigate(0)
              }}>
                <p>Logout</p>
              </button>
            </div>
          ) : (
            <div className="flex mr-0">
              <a href="/register" className="mr-0">Register</a>
              <div style={{ width: 20 }} />
              <a href="/login" className="mr-0">Login</a>
            </div>
          )}

        </div>
      </Container>
    </div>
  )
}
