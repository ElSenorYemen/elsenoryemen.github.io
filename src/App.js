
import logo from './Zak.JPG';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <div className="center-image">
        <img src={logo} className="App-logo" alt="logo"
        width="650"
        height="400" 
        />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.

         <p>My name is Zak and I am going to master React</p> 
        
        </p>
        <a
          className="App-link"
          href="https://github.com/ElSenorYemen"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out fam!
        </a>
      </header>
    </div>
  );
}

export default App;
