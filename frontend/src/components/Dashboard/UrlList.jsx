import { useState, useEffect } from 'react';
import { api } from '../../services/api';

const UrlList = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await api.get('/user/urls');
        setUrls(response.data);
      } catch (error) {
        console.error('Erro ao carregar URLs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, []);

  return (
    <div className="url-list">
      <h3>Suas URLs Encurtadas</h3>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Original</th>
              <th>Encurtada</th>
              <th>Cliques</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url.id}>
                <td><a href={url.originalUrl} target="_blank" rel="noopener noreferrer">{url.originalUrl}</a></td>
                <td><a href={`/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a></td>
                <td>{url.clicks || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UrlList;