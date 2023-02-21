import "./App.css";

const App = (props) => {
  const { notes } = props;
  return (
    <div className="App">
      {
        /* prettier-ignore */
        notes.map(note =>
          <li key={note.id}>
              {note.content}
          </li>
        )
      }
    </div>
  );
};

export default App;
