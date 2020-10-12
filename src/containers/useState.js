import React,{useState} from 'react'

function UseState() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const [name,setName] = useState({firstName : "", lastName : ""})
    const [items,setitems] = useState([])

    const incremetFive = () => {
        for(let i=0; i<5; i++){
            // setCount(count+1)
            setCount(prevState => prevState + 1)
        }
    }

    const addItem = () => {
        setitems([...items,
            {
                id : items.length,
                value : Math.floor(Math.random() * 10) + 1
            }])
    }

    return (
        <div>
            <button onClick={() => setCount(prevState => prevState + 1)}>Count {count}</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement {count}</button>
            {/* safe way */}
            <button onClick={incremetFive}>Increment 5</button>
            <form>
                <input type="text" 
                value= {name.firstName}
                onChange = {(e) => setName({...name,firstName : e.target.value})} 
                />
                <input type="text"
                    value = {name.lastName}
                    onChange = {(e) => setName({...name, lastName : e.target.value})} 
                 />
                <h2>First Name : {name.firstName}</h2>
                <h2>Lat Name : {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
            <button onClick={addItem}>Add Number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

//dont use hooks inside loops

export default UseState
