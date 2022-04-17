import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {
            id: 1,
            title: 'Car Insurance',
            date: new Date(),
            amount: 219.09
        }, {
            id: 2,
            title: 'Toilet Paper',
            date: new Date(),
            amount: 9.09
        }, {
            id: 3,
            title: 'Table',
            date: new Date(),
            amount: 29.09
        }, {
            id: 4,
            title: 'Clothes',
            date: new Date(),
            amount: 109.09
        }
    ]
return(     <div>
  <h2>Let's get started!</h2>
  <Expenses items={expenses}/>
  </div>
)

}

export default App;
