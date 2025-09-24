import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const ReviewForm = ({ bookId, reloadReviews }) => {

    const url = `http://localhost:3000/books/${bookId}/reviews`;

    const intialData = {
        name: "",
        vote: "",
        text: ""
    }

    const [formData, setFormData] = useState(intialData);

    const naviga = useNavigate();

    const setFieldValue = (event) => {
        const { name, value } = event.target; 

        setFormData ({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(url, formData, 
                {headers: { "Content-Type": "application/json" }})
                    .then((resp) => {
                        console.log("Recensione inserita!")
                        setFormData(intialData);
                        reloadReviews();
                        naviga("/");
                    }
            )
    }

    return (
        <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 col-md-10 col-12'>
                        <div className='card shadow-lg'>
                            <div className='bg-orange card-header text-white text-center'>
                                <h3 className='mb-0'>Aggiungi nuova recensione</h3>
                            </div>
                            <div className='card-body p-4'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group mb-3'>
                                        <label htmlFor="" className='form-label'>
                                            Nome
                                        </label>
                                        <input 
                                            type="text" 
                                            className='form-control' 
                                            placeholder='Nome' 
                                            name='name' 
                                            id='name'
                                            value={formData.name}
                                            onChange={setFieldValue}
                                        />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor="" className='form-label'>
                                            Voto
                                        </label>
                                        <input 
                                            type="number" 
                                            className='form-control' 
                                            placeholder='Voto' 
                                            min="0"
                                            max="5"
                                            name='vote' 
                                            id='vote'
                                            value={formData.vote}
                                            onChange={setFieldValue}
                                        />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor="" className='form-label'>
                                            Testo recensione
                                        </label>
                                        <textarea 
                                            type="text" 
                                            className='form-control' 
                                            placeholder='Testo recensione' 
                                            name='text' 
                                            id='text'
                                            value={formData.text}
                                            onChange={setFieldValue}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <button className='btn btn-primary' type='submit'>Salva Recensione</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ReviewForm