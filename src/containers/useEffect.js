import React,{useEffect,useState} from 'react';

function UseEffect() {
    const initialCount = 0
    const [name, setName] = useState('')
    const [count, setCount] = useState(initialCount)
    useEffect(() => {
        console.log("update");
        document.title = `You clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count{count}</button>

        </div>
    )
}

export default UseEffect
