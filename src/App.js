
import React, {useEffect, useState} from "react";
import './style.css';



function App() {

  /*Estamos trabalhando com os nossos Hooks useEffect e useState
    useEffect: quando acessarmos ao nosso site ela deve chamar o que estiver dentro
    da função aliás ela deve retornar a nossa api
    useState: Vai trabalhar na atualização dos nossos estados 
  */

    //useState

    const [nutri, setNutri] = useState([]);

    /*
      useEffect: quando usuarios acessar a nossa aplicação ela chama o que 
      estiver dentro do nosso useEffect
    */

    useEffect(() => {

        function loadApi(){
            
            //Usando fetch para fazer a requisição http
            //como parametros do nosso fetch nós queremos passar o cara que recebe a nossa utl

            let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

          /*
            No caso de sucesso a url é passado na variavel resultado como promessa e é
            convertido em json.
          */

            fetch(url)
            .then((resultado) => resultado.json())
            .then((json) => {
                console.log(json);
                setNutri(json);
            })

        }
        
        loadApi();
    }, [])

  return (
    <div className="container">
        <header>
          <strong>React Nutri</strong>
        </header>
        {nutri.map((item) => {

          //Retornando um JSX
          //Para o React reconhever cada item é necessario elas possuirem um Key
          return(

            <article key={item.id} className="post">
                <strong className="titulo">{item.titulo}</strong>
                <img src={item.capa} alt={item.titulo} className="capa"/>
                <p className="subtitulo">
                  {item.subtitulo}
                </p>
                <a className="botao">Acessar</a>
            </article>

          )

        })}
    </div>
  );
}

export default App;
