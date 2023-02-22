import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/Phptest');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar w/ text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Login
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            {user ? (
              <>
                Welcome, {user.first_name}!{' '}
                <Link to="/Testphp" onClick={logOut}>
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link to="/Testphp">Log in</Link> or{' '}
                <Link to="/">create an account</Link>
              </>
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
