
const App = () => {
  const arr = [1,2,3,4,5,6,7,8,9];
  return (
    <div className="App">
      <h1>Hello Dio</h1>
      {arr.map((item)=>{ 
        return(
          <p>
            {item}* 5 = {item * 5}
          </p>
        );
      })}
    </div>
  );
};

export default App;
