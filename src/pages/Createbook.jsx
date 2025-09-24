import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Createbook = () => {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        image: null,
        abstract: ""
    });

    const naviga = useNavigate();

    const setFieldValue = event => {
        //recuperiamo i valori delle proprietà name e value del campo input
        const { name, value } = event.target;

         // se il campo è "image" (quindi un file), salvo il file caricato dall’utente (prendo il primo della lista dei file)
        if(name === "image"){
            setFormData({ ...formData, image: event.target.files[0] });
        }

        // se invece è un normale campo di testo (quindi "title", "author", "abstract" => [name]), aggiorno quella proprietà dentro formData
        else{
            setFormData({ ...formData, [name]: value });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3000/books", formData, { 
            headers: {"Content-Type": "multipart/form-data"},
        }).then(resp => {
            console.log("libro inserito correttamente")
            naviga("/");
        })
    }

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-md-10 col-12'>
                    <div className='card shadow-lg'>
                        <div className='bg-orange card-header text-white text-center'>
                            <h3 className='mb-0'>Aggiungi Nuovo libro</h3>
                        </div>
                        <div className='card-body p-4'>
                            <form onSubmit={handleSubmit}>
                                <div className='row gy-4'>
                                    <div className='col-12'>
                                        <label htmlFor="title" className='form-label'>Titolo</label>
                                        <input 
                                        name='title'
                                        id='title'
                                        type="text"
                                        className="form-control"
                                        value={formData.title}
                                        placeholder='Inserisci titolo libro'
                                        required
                                        onChange={setFieldValue}
                                        />
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor="author" className='form-label'>Autore</label>
                                        <input 
                                        name='author'
                                        id='author'
                                        type="text"
                                        className="form-control"
                                        value={formData.author}
                                        placeholder='Inserisci autore libro'
                                        required
                                        onChange={setFieldValue}
                                        />
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor="image" className='form-label'>Immagine</label>
                                        <input 
                                        name='image'
                                        id='image'
                                        type="file"
                                        className="form-control"
                                        required
                                        onChange={setFieldValue}
                                        />
                                    </div>
                                    <div className='col-12'>
                                        <label htmlFor="abstract" className='form-label'>Plot</label>
                                        <textarea 
                                        name="abstract" 
                                        id="abstract" 
                                        className='form-control'
                                        value={formData.abstract}
                                        placeholder='Inserisci plot'
                                        required
                                        onChange={setFieldValue}
                                        ></textarea>
                                    </div>
                                    <div className='col-12 text-center'>
                                        <button 
                                        className='btn btn-success px-4' 
                                        type='submit'
                                        >Aggiungi libro</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createbook
