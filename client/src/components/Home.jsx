import { useState, useContext } from "react";
// import from "";
import Button from "./Button";
import "./Button.scss";
import "./Home.scss";
import ConnectionContext from '../ConnectionContext'

function Home(props) {
  //host name , guest name, gameRoomId
  const [hostName, setHostName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [gameId, setGameId] = useState(null);
  //To Do - Add new passed down functions as props in order to handle the 2 form submits
  const { onJoin, onCreate } = props;

  const connection = useContext(ConnectionContext);
  const connectionId = connection;

  return (
    
    <main>
      <section className="box-home">
        <h1>Let's Get Trivial</h1>
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <p>Host New Game</p>
          <input
            data-testid="host-name-input"
            name="Hostname"
            type="text"
            placeholder="Enter Player Name"
            value={hostName}
            onChange={(event) => setHostName(event.target.value)}
          />
          <Button onClick={() => onCreate(hostName)} home>
            Create Game
          </Button>
        </form>
        
          <p>{connection.id}</p>
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <p>Join Game </p>
          <input
            data-testid="player-name-input"
            name="Player Name"
            type="text"
            placeholder="Enter Player Name"
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}
          />
          <input
            data-testid="game-id-input"
            name="Hostname"
            type="text"
            placeholder="Enter Game ID"
            value={gameId}
            onChange={(event) => setGameId(event.target.value)}
          />
          <Button onClick={() => onJoin(playerName, gameId)} home>
            Join Game
          </Button>
        </form>
      </section>
    </main>
  );
}

export default Home;
