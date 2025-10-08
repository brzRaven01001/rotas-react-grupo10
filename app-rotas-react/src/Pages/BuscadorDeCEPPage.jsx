import BuscadorDeCEP from '../Components/BuscadorDeCEP';

function BuscadorDeCEPPage() {
  return (
    <div className="page">
      <h1 className="page-title">Buscador de CEP</h1>
      <p>Encontre endereços utilizando o CEP brasileiro.</p>
      <BuscadorDeCEP />
    </div>
  );
}

export default BuscadorDeCEPPage;