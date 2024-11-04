
//Mapping,Conditional Rendering 
//let listitems = ['Sagnik','Abir','Arijit',''];
let listitems = [];

function App() {
  return (
    <>
      <h1>Hello</h1>
      {listitems.length===0?<h3>No Items</h3>:null}
      {listitems.map((items) => <ul key={items}>{items}</ul>)}  
    </>
  );
}
//line 10 is defined how conditional rendering is worked using ternary operator
//using logical operator {listitems.length===0 && <h3>No Items</h3>}
//line 11 is defined how mapping is worked it map string array to list items
export default App;
