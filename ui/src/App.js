import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import Routes from "./components/Routes";
// import Modal from "./components/Modal";
import Modal from "./components/Modal/hooks-modal";
import Logo from "./components/Logo";
import "./App.css";
import "./bulma.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoute: null
    };

    this.setSelectedRoute = this.setSelectedRoute.bind(this);
    this.addRoute = this.addRoute.bind(this);
  }

  componentDidMount() {
    const sr = (window.sr = ScrollReveal());
    sr.reveal(".hero .title, .card, .subtitle");

    sr.reveal(".route", {
      duration: 750,
      distance: "40px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      interval: 64,
      origin: "bottom",
      viewFactor: 0.32
    });
  }

  setSelectedRoute(item, action = "edit") {
    this.setState({
      selectedRoute: item,
      modalAction: action
    });
  }

  // Change this, is doesnt really make sense
  addRoute() {
    this.setSelectedRoute({}, "new");
  }

  render() {
    return (
      <div>
        <section className="hero is-info is-medium main-background">
          <nav>
            <div className="is-pulled-left">
              <h1>MockIt</h1>
            </div>
            <div className="is-pulled-right">
              <a className="button is-primary" onClick={this.addRoute}>
                <strong>Add Route</strong>
              </a>
            </div>
          </nav>

          <div className="hero-body">
            <div className="container has-text-centered">
              <Logo />
              <p className="subtitle">A tool to quickly mock out end points, setup delays and more...</p>
            </div>
          </div>
        </section>

        {this.state.selectedRoute && <Modal route={this.state.selectedRoute} action={this.state.modalAction} onClose={() => this.setSelectedRoute(null)} />}

        <main>
          <Routes onEdit={this.setSelectedRoute} />
        </main>

        {/* <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>MockIt</strong> by <a href="https://jgthms.com">David Boyne</a>.
            </p>
          </div>
        </footer> */}
      </div>
    );
  }
}

export default App;