import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <nav className="navbar">
          <ul>
            <li><a href="#App">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Hero Section - 3 columns of cards */}
        <div className="hero">
          <div className="column">
            <div className="card">
              <h2>About me</h2>
              <p>Some text...</p>
            </div>
            <div className="card">
              <h2>Skills</h2>
              <p>
                  - Programming : C, C++ etc
                  - Web Development : HTML, CSS, JavaScript, React etc
                  - Database : MySQL, Django etc
                  - Tools : Git, GitHub, VSCode etc
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h2>Card 2</h2>
              <p>Some text...</p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h2>Card 3</h2>
              <p>Some text...</p>
            </div>
          </div>
        </div>
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

      {/* Footer Section */}
      <footer>
        <p>© 2024 Casey's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
