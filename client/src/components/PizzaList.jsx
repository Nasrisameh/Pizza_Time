import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function PizzaList () {
    const [pizzas, setPizzas] = useState([]);
    // const nav =useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/api/pizza')
        .then(res => setPizzas(res.data))
        .catch(err => console.log(err));
    }, []);

    // ========DELETE============
    const handleRemove = (id) => {
        axios.delete(`http://localhost:8000/api/pizza/delete/${id}`)
        .then(() => setPizzas(pizzas.filter(pizza => pizza._id !== id)))
        .catch(err => console.log(err));
    }

return (
    <div className='container mt-5'>
        <h1>Order Pizza</h1>
        <Link to="/Create" className='btn btn-primary mb-3'>Order a pizza</Link>
        <p>Find stores in your area!</p>
        <table class="table table-sm table-borderd ">
            <thead>
            <tr>
                <th>Created At</th>
                <th>Pizza</th>
                <th>Size</th>
                <th>Delivered</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {pizzas.map(p => (
                <tr key={p._id}>
                <td>{p.createdAt}</td>
                <td>{p.pizza}</td>
                <td>{p.size}</td>
                <td>{p.delivered ? 'Ture' : 'False'}</td>
                <td>
                    <button className='btn btn-sm btn-danger' onClick={() => handleRemove(p._id)}>Remove</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
);
};

    export default PizzaList;