import { fakeDb } from '../../utilities/fakeDb';
import './Student.css';

const Student = (props) => {
    const {id, name, roll, gender} = props.student;

    const addToCart = (id)=>{
        console.log('added item',id)
        fakeDb(id);
    }

    return (
        <div className='student'>
            <h1>Student</h1>

            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <h3>Roll: {roll}</h3>
            <h3>Gender: {gender}</h3>
            <button onClick={()=> addToCart(id)}>Add to cart</button>
            
            
        </div>
    );
};

export default Student;