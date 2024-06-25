import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"


function Create() {
    const [size, setSize] = useState('');
    const [pizza, setPizza] = useState([]);
    const [note, setNote] = useState('');
    const [errors,setErrors]=useState([]);
    const nav=useNavigate()

    const onSubmitHandler = (e)=>{
        e.preventDefault() 
        axios.post('http://localhost:8000/api/pizza/new',{size,pizza,note})
            .then(res=>{
                console.log(res.data);
                nav('/pizza')
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
}

return (
    <div className="container d-flex justify-content-between mb-4 mt-5'">
    <form onSubmit={onSubmitHandler}>
    <label className="col-sm-20 col-form-label">
        <h6>Pizzas</h6>
        <select value={pizza} onChange={(event) => setPizza(event.target.value)}>
        <option value="pepperoni">Pepperoni</option>
        <option value="Cheese">Cheese</option>
        <option value="combination">Combination</option>
        <option value="philly cheese steak">Philly Cheese Steak</option>
        <option value="hawaiin">Hawaiin</option>
        <option value="veggie">Veggie</option>
        </select>
    </label>
    <label className='form-label'>
        <h6>Sizes</h6>
        <select value={size} onChange={(event) => setSize(event.target.value)}>
        <option value="">Select a size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        </select>
    </label><br/>
    {/* Notes must contain max of 25 characters */}
    <div>
        <h6>Notes</h6>
        <textarea id='notes' type='text' name='notes' value={note} onChange={(event) => setNote(event.target.value)} />
    </div>
    <div className=' mb-3'>
        {errors.map((err,i)=>(
            <p className='text-danger' key={i}>{err}</p>
        ))}
    </div>
    {/* navigate boutton */}
    <button className='btn btn-primary' type="submit">Order now!</button>
    
    </form>
    </div>
);
}

export default Create;