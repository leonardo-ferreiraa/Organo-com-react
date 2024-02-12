import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const [times, setTimes] = useState([
    {
      nome: 'League of legends',
      cor: '#82CFFA'
    },
    {
      nome: 'Valorant',
      cor: '#E06B69'
    },
    {
      nome: 'Counter-Strike: Global Offensive',
      cor: '#FFBA05'
    },
    {
      nome: 'Dota 2',
      cor: '#E06B69'
    },
 ]);
const inicial = [
    {
      nome: 'Leonardo Ferreira da Silva Vieira',
      cargo: 'Top Laner',
      imagem: 'https://github.com/leonardo-ferreiraa.png',
      time: times[0].nome
    },
  {
      nome: 'Leonardo Ferreira da Silva Vieira',
      cargo: 'Batedor',
      imagem: 'https://github.com/leonardo-ferreiraa.png',
      time: times[1].nome
    },
  {
      nome: 'Leonardo Ferreira da Silva Vieira',
      cargo: 'Sniper',
      imagem: 'https://github.com/leonardo-ferreiraa.png',
      time: times[2].nome
    },
  {
      nome: 'JULIANA AMOASEI',
      cargo: 'Top Laner',
      imagem: 'https://github.com/leonardo-ferreiraa.png',
      time: times[3].nome
    },
  ]

  
  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador() {
    console.log('deletando colaborador');
  }

  function mudarCor(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time 
          mudarCor={mudarCor} 
          key={indice} 
          time={time} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />
          )}
      </section>  
    <Rodape />
    </div>
  );
}

export default App;
