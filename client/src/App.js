import './App.css';

function App() {
  return (
    <div className="App">
      <form action="/file/test_user" method="post" enctype="multipart/form-data">
        <input type="file" name="upload"/>
        <input type="submit" value="Submit File!"/>
      </form>
    </div>
  );
}

export default App;
