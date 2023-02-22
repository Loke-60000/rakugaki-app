import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayName = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <h1>{user.first_name}</h1>
        </>
      ) : null}
    </>
  );
};

export default DisplayName;
