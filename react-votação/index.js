var container = document.getElementById("app");

function Contador(props) {

    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
        console.log(numero);
    }

    function subtratir() {
        if(numero > 0) {
        
            setNumero(numero - 1);
            console.log(numero);
        }
    }

    return (
        <React.Fragment>
            <h3>{props.titulo}</h3>
            <img src={props.imagem} width="120"/>
            <p>{numero}</p>
            <button onClick={somar}>+</button>
            <button onClick={subtratir}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no mais fofinho</h1>
            <Contador titulo="Cachorrinhos Fofinhos" imagem="./img/cachorrinho-fofinho.jpg"/>
            <Contador titulo="Gatinhos Fofinhos" imagem="./img/gatinho-fofinho.jpg"/>
        </React.Fragment>
    );        
}

ReactDOM.render(React.createElement(App, null, null), container)