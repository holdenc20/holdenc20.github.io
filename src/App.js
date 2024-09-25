import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>


      {/* Home Section */}
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to my website!</p>
      </section>
  
        {/* About Section */}
      <section id="about">
        <h1>About</h1>
        <p>My name is Casey.</p>
      </section>
    </div>
  );
}

export default App;
