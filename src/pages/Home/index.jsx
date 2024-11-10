import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {

  const users = [{
      nome: "Lucas",
      idade: 20,
      email: "
    
    }
  ]


  return (
    <div className="container">
      <form action="">
        <h1>Cadastros de Users</h1>
        <input name="nome" type="text" />
        <input name="idade" type="number" />
        <input name="email" type="email" />

        <button type="submit">Cadastrar</button>
      </form>

      <div>
        <div>
          <h2>Nome</h2>
          <h2>Idade</h2>
          <h2>Email</h2>
        </div>
        <button>
          <img src={Trash} alt="" />
        </button>
      </div>



    </div>
        









  );
}

export default Home;
