import { useState } from 'react';
import { api } from '../../services/api';

const UrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/urls/shorten', { url: originalUrl });
      setOriginalUrl('');
      alert(`URL encurtada: ${response.data.shortUrl}`);
    } catch (err) {
      console.error(err);
      setError('Erro ao encurtar URL');
    }
  };

  return (
    <div className="url-form">
      <h2>Encurtar Nova URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Cole sua URL aqui"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit">Encurtar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UrlForm;