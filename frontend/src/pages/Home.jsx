import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {user?.name}!</h1>
      <button onClick={() => { localStorage.removeItem('user'); navigate('/'); }} style={styles.button}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  button: { padding: '10px', background: 'red', color: 'white', border: 'none', marginTop: '20px' },
};

export default Home;
