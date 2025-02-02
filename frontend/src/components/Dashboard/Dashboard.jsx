import UrlForm from './UrlForm';
import UrlList from './UrlList';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <header>
        <h1>Bem-vindo, {user?.name}</h1>
        <button onClick={logout}>Sair</button>
      </header>
      
      <UrlForm />
      <UrlList />
    </div>
  );
};

export default Dashboard;