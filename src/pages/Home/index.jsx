import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      nome: "victor",
      idade: 20,
      email: "victor@gmail.com",
    },
    {
      nome: "aline",
      idade: 44,
      email: "alineri@gmail.com",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastros de Users</h1>
        <input name="nome" type="text" />
        <input name="idade" type="number" />
        <input name="email" type="email" />

        <button type="submit">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <h2>Nome: {user.nome}</h2>
            <h2>Idade: {user.idade}</h2>
            <h2>Email:{user.email}</h2>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
