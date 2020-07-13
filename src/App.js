import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert'

function App() {
  return (
    
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav text-light">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                <p className="h3 text-primary">There has never been a more exciting time to work at KPMG in India. 
            Every day our people are making a difference by helping to transform businesses, 
            enhance performance and create value for our clients by solving their most critical challenges.

Working at KPMG in India means you'll have the opportunity to expand your global mindset, 
through international career opportunities and have access to world class learning 
and development tools while working alongside some of the brightest minds in business, 
addressing complex issues and making a difference.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default App;
