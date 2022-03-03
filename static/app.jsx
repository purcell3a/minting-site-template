function App() {

    return (

      <Router>

          <Switch>
                  <Route exact path="/">
                      <TopNav/>
                      <Landing />
                  </Route>

           </Switch>

      </Router>

    );
}

ReactDOM.render(<App />, document.getElementById('app'));