import UserContextProvider from "./context/UserContext";
import UserList from "./components/user/UserList";
import UserDetail from "./components/user/UserDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header margin-top">
        <h1 className="txt-center">hub-take-home-exercise</h1>
      </header>
      <UserContextProvider>
        <UserList />
        <UserDetail />
      </UserContextProvider>
    </div>
  );
}

export default App;
