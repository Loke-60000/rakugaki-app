import { useEffect, useState } from 'react';
const DisplayUsername = () => {
  const [user, setUser] = useState(null);
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
          <h2>@{user.last_name}</h2>
        </>
      ) : null}
    </>
  );
};

export default DisplayUsername;
