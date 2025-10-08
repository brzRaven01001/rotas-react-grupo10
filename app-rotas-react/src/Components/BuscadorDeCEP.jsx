import { useState } from 'react';

function BuscadorDeCEP() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const buscarCEP = async () => {
    if (!cep || cep.length !== 8) {
      setError('Por favor, digite um CEP válido com 8 dígitos');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
        setEndereco(null);
      } else {
        setEndereco(data);
      }
    } catch (err) {
      setError('Erro ao buscar CEP');
      setEndereco(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="component-container">
      <h3>Buscador de CEP</h3>
      
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          placeholder="Digite o CEP (apenas números)"
          maxLength={8}
        />
        <button 
          onClick={buscarCEP}
          disabled={loading}
          className="btn btn-primary"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>

      {error && (
        <div style={{ color: '#e74c3c', marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      {endereco && !error && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#ecf0f1', 
          borderRadius: '4px',
          marginTop: '1rem'
        }}>
          <h4>Endereço encontrado:</h4>
          <p><strong>CEP:</strong> {endereco.cep}</p>
          <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>Estado:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default BuscadorDeCEP;