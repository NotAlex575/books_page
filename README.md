STEPLIST CREAZIONE WEBAPP LIBRERIA (PASSO PER PASSO)

Questa webapp avrà un db di libri a cui possiamo inserire delle recenzioni!

dopo aver seguito i vari passaggi (fino al punto 7), iniziamo la parte front-end del progetto!

iniziamo!

________________________________________________

8) REACT


    iniziamo a creare il nostro progetto react!
    seguiamo i seguenti passaggi per crearla!

    1) apriamo il terminal

    2) eseguiamo il comando npm create vite@latest

    3) qui inseriremo per esercitazione solo il nome del progetto (il resto per ora non ci serve), e lo chiamiamo per esempio books_page

    4) fatto questo inseriamo il comando cd books_page per entrare col termimale nella path del progetto

    5) inseriamo dei framework che ci saranno utili!

        - npm i axios

        - npm i bootstrap@5.3.8 (o se si trova una versione più aggiornata scarica quella dal loro sito ufficiale)

        - npm install react-router-dom

    6) cancelliamo app.css

    7) svuotiamo app.jsx e lascia solo questo

        function App() {

            return (
                <>
                    <h1>Hello world!</h1>
                </>
            )
        }

        export default App;

    8) svuota anche index.css


    ora abbiamo un progetto react vuoto che, all'avvio, ci mostrerà hello world nella pagina

___________________________________________________________

9) PAGINE WEB

    ora che abbiamo creato il progetto react, popoliamolo con delle pagine!

    1) iniziamo col creare una cartella components

    2) dentro quella cartella, creiamo un file Navbar.jsx

    3) ora possiamo creare la navbar del nostro progetto, ecco a te un'esempio di uno scheletro della navbar:

    import React from 'react'

        const Navbar = () => {
            return (
                <div>Navbar</div>
            )
        }

        export default Navbar

    questo scheletro della navbar si può creare anche solo con un comando scritto proprio nel progetto!
    basta scrivere rafce e crea automaticamente questo!

    se abbiamo scaricato bootstrap, possiamo sfruttare questo framework per creare lo stile grafico della pagina (possiamo comunque usare index.css per fare dei nostri stili)

    se vuoi in futuro creare degli stili per una singola pagina, basta creare una cartella modules, il cui interno avrà i vari file.module.css

    ma per ora:
    
    4) usiamo bootstrap

    es:

        import React from 'react'

            const Navbar = () => {
            return (
                <header className="border bg-primary-subtle d-flex row">
                    <h1>Questa è la navbar!</h1>
                </header>
            )
        }

        export default Navbar
    
    5) adesso è necessario inserire Navbar dentro a app.css per vederlo, quindi andiamo in app.jsx e inseriamo:

        1) alla prima riga l'import:
        import Navbar from "./components/Navbar";

        2) dentro ai <> </> ci inseriamo <Navbar></Navbar>

    adesso abbiamo una navbar visibile!

  _________________________________________________________

  10) ROUTER


    ora però rendiamo possibile la possibilità di passare su altre pagine!
    anticipiamo questo in modo tale che abbiamo già un router pronto per passare da pagina a pagina ovunque, siccome navbar sarà in ogni pagina!

    1) creiamo una componente layouts e creiamo un file Defaultlayout.jsx

    2) installiamo ora tramite terminal -> npm install react-router-dom

    ora abbiamo il router, ma come lo implementiamo nel Defaultlayout.jsx? cosi!

    
        import { Outlet } from "react-router-dom"

        const Defaultlayout = () => {
        return (
            <>
                <Outlet></Outlet>
            </>
        )
        }

        export default Defaultlayout


    adesso abbiamo inserito nel layout il router, ma è vuoto a livello di contenuto...
    questo perchè adesso ci metteremo la nostra navbar!
    
    3) come abbiamo fatto in App.jsx importiamo navbar sempre come prima riga
    import Navbar from "./components/Navbar";

    4) sempre dentro al <> </> e sopra <Outlet></Outlet> ci inseriamo 
    <Navbar></Navbar>

    5) ora che abbiamo il Defaultlayout con la navbar, rimuoviamo Navbar (sia import che <Navbar></Navbar>) da app.jsx e ci inseriamo il Defaultlayout:

        1) importiamo Defaultlayout.jsx in app.jsx attraverso 
        import Defaultlayout from "./layouts/Defaultlayout"

        2) ora creiamo il seguente:

        <BrowserRouter>
            <Routes>
                <Route element={<Defaultlayout></Defaultlayout>}>
                </Route>
            </Routes>
        </BrowserRouter>

        INFO!

        cosa fanno BrowserRouter, Routes e Route?

          1) BrowserRouter -> Gestisce l'intera logica di routing dell'app, ovvero tutti i componenti al suo interno

          2) Routes -> è il contenitore delle varie route che metteremo al suo interno

          3) Route -> gestisce la visibilità del singola pagina una volta che abbiamo eseguito la sua path (come tipo "/" o "/about", etc.)


        in questo modo ora l'elemento Defaultlayout ha a disposizione la possibilità di navigare tra le pagine dei componenti al suo interno

        ma al momento non abbiamo neanche un collegamento che porta ad una determinata pagina (infatti ora abbiamo 0 collegamenti di route....)

        l'esercizio attuale, è quello di creare le 2 seguenti pagine:
        
        1) Homepage.jsx che contiene la lista dei libri 
        
        2) SingleMovie.jsx, che comprenderà solo il        dettaglio di 1 singolo libro (il singolo libro sarà scelto in base al libro cliccato)

        quindi...

___________________________________________________________

11) PAGINE 

    iniziamo col creare 2 pagine, che tramite l'uso delle route saranno raggiungibili!

    1)  creiamo un folder "pages", in cui ci inseriamo le varie pagine in cui vogliamo navigare

    2) creiamo la prima pagina, ovvero la Homepage, creando un nuovo file dentro il folder pages, chiamato Homepage.jsx

    3) dentro a Homepage.jsx eseguiamo sempre rafce, che farà comparire questo scritto:

        const Homepage = () => {
            return (
                <div className="text-center fs-1 fw.bold mb-5">Homepage</div>
            )
        }

        export default Homepage

    4) creato lo scheletro della Homepage, facciamo in modo che sia visibile nella pagina, quindi in app.jsx, importiamo Homepage.jsx sopra con tutti gli import già messi, e dentro a <Route element={<Defaultlayout></Defaultlayout>}>, ci andiamo ad inserire:

    <Route path="/" element={<Homepage></Homepage>}></Route>

    cosi facendo, ogni volta che saremo nella path iniziale della pagina (siccome abbiamo messo come path "/"), apparirà la homepage!

    ora non ci resta che creare SingleMovie.jsx, eseguire di nuovo rafce per creare il suo scheletro e importarlo in app.jsx, sempre con l'uso dell'import.

    ora però dobbiamo considerare che non è necessario creare un'altra path (perchè alla fine rimaniamo sempre nella pagina principale, ma mostrando solo un'elemento!), quindi andiamo a spezzettare ciò in questa maniera:

    <Route path="/">
        <Route path = "" element={<Homepage></Homepage>}></Route>
        <Route path = ":id" element={<SingleMovie></SingleMovie>}></Route>
    </Route>

    cosa abbiamo fatto?

    abbiamo una path unica, dove la pagina principale è homepage, ma se in futuro, dopo aver messo il lato logico, cliccheremo un libro, passeremo direttamente a vedere il SingleMovie

    inizia col sbizzarrirti col html e css per la struttura grafica della homepage!

    se ti serve ti metto un'esempio!

    1) HOMEPAGE:

    const Homepage = () => {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Bookly</h1>
                        <h2>
                            <i>Libri per i veri appassionati</i>
                        </h2>
                    </div>
                </div>
                <div className="row gy-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="./img/sample.jpg" alt="libro" />
                            <div className="overlay">
                                <h2 className="text-center my-3">Titolo</h2>
                                <p className="text-center">Autore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="./img/sample.jpg" alt="libro" />
                            <div className="overlay">
                                <h2 className="text-center my-3">Titolo</h2>
                                <p className="text-center">Autore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="./img/sample.jpg" alt="libro" />
                            <div className="overlay">
                                <h2 className="text-center my-3">Titolo</h2>
                                <p className="text-center">Autore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="./img/sample.jpg" alt="libro" />
                            <div className="overlay">
                                <h2 className="text-center my-3">Titolo</h2>
                                <p className="text-center">Autore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card">
                            <img src="./img/sample.jpg" alt="libro" />
                            <div className="overlay">
                                <h2 className="text-center my-3">Titolo</h2>
                                <p className="text-center">Autore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Homepage

    NOTA! qui ho creato nella cartella public una cartella img contenente un img.jpg chiamato sample.jpg (se non hai 1 immagine, scaricane 1 dal web, la rinomi come vuoi e la metti dentro la cartella, poi dentro img src = "./img/nomeFoto.jpg" o png se hai scaricato la foto in formato png)

    ________________________

    2) NAVBAR -> rimosso qualche elemento non necessario per l'esercizio e aggiunto qualche stile grafico!

    const Navbar = () => {
        return (
            <header className="bg-orange">
                <h1>Questa è la navbar!</h1>
            </header>
        )
    }

    export default Navbar
    ________________________

    3) INDEX.CSS -> ci ho aggiunto di mio qualche elemento di css dentro index.css:

    .bg-orange{
        background-color: #a37230;
        text-align: center;
    }

    header{
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header h1{
        color: white !important;
    }

    h1, h2, h3, h4, h5, h6{
        color: #a37230 !important;
    }

    body{
        font-family: sans-serif;
    }

    ________________________

fatto ciò abbiamo un vero e proprio scheletro della nostra homepage, con 5 card dei """libri""".

ma ora vediamo di inserire la nostra vera lista di libri, usando il database che abbiamo creato!

___________________________________________________________

12) AXIOS E USESTATE/USEEFFECT

iniziamo ad includere all'interno di homepage i seguenti import:

   1)  import axios from "axios" 
   
la libreria axios, serve per fare le chiamate HTTP (GET, POST, PUT, DELETE, ecc.) verso un server o un’API (in questo caso ci riferiremo al database)

   2) import { useState, useEffect } from "react" 

ci sono qui 2 librerie:
    
- useState -> Serve per salvare e cambiare un valore dentro al componente. 
    
- useEffect -> Serve per fare qualcosa quando il componente si carica o cambia stato.

ora dentro a const HomePage e prima del return, andiamo ad eseguiamo i seguenti passaggi:

1) dichiariamo le variabili di stato, attraverso

    const [books, setBooks] = useState ([])

    dove books sarà il contenitore, mentre setBooks sarà la function che modificherà o inserirà i libri nella pagina

2) ora recuperiamo i libri nel database attraverso la chiamata ajax, che verrà eseguita alla chiamata della function fetchBooks!

    const fetchBooks = () => {
        axios.get("http://localhost:3000/books")
    };

http://localhost:3000/books se ricordi, era la chiamata che facevamo con postman (quindi se non è uguale per te, copia direttamente il protocollo che hai nel get di index)

3) recuperiamo, li dobbiamo settare come response, quindi continuando la chiamata ajax:

    const fetchBooks = () => {
        axios.get("http://localhost:3000/books")
        .then((resp) => {
            setBooks(resp.data);
        })
        .catch((err) => console.log(err));
    };

nel .then recuperiamo la lista di libri e la mettiamo nei books (attraverso setBooks), il cui value sarà la value entro axios.get (e come se fosse la chiamata query che abbiamo fatto su postman, ma con la differenza che qui salviamo i valori!)

4) creiamo un useEffect per richiamare la function, alla prima esecuzione del progetto e ogni volta che viene eseguita una modifica!

    useEffect(fetchBooks, [])

vogliamo vedere se cicla i libri presenti nel database? 

scriviamo sotto setBooks(resp.data);

console.log(resp.data);

avviamo sia books_page che il progetto backend che abbiamo preparato prima, apriamo anche il database in mysql (se non lo hai gia aperto), entriamo nella connection che avevamo creato, entriamo nella pagina localhost aperta qui, clicchiamo f12 per vedere se ci mostra la lista di libri, eeeeeeeeee.....

Access to XMLHttpRequest at 'http://localhost:3000/books' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

comparirà questo errore.... MA PERCHE?

perchè il browser sta bloccando la richiesta, poichè ci sono due origini diverse (porte diverse = origini diverse).

Per permettere la comunicazione, dobbiamo fare in modo che la parte backend accetti richieste dalla parte del frontend!
__________________________________________________________


per fare ciò dobbiamo tornare nel progetto backend, e fare un passaggio per farli comunicare tra loro!

da li parti al passaggio 13!

__________________________________________________________


14) LISTA.MAP

adesso cicliamo ogni singolo elemento presente nel database e mostriamo nella pagina!

abbiamo già fatto la chiamata ajax, ora non resta che mostrarla in pagina, e per fare questo cicliamo la lista del database con un mapping (.map), dove prenderà ogni elemento presente nella lista, con i value che poi vogliamo vedere!

   1) torniamo in Homepage.jsx e teniamoci solo:

   return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Bookly</h1>
                    <h2>
                        <i>Libri per i veri appassionati</i>
                    </h2>
                </div>
            </div>
        </div>
    )

    modifichiamolo:

    2) sotto il div contenente il row, aggiungiamoci un'altro row, come questo:

    <div classname = "row gy-3"></div>

    3) dentro a questo container inseriamoci il ciclo del .map

    come? cosi!

    {books.map(book => {
        return(
            {/* contenuto loopato! */}
        )
    })}

    in questo modo loopiamo il contenuto presente nel return!

    4) dentro adesso al return inseriamo i dati che vogliamo inserire e loopare!

    return(
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <img src="./img/sample.jpg" alt="libro" />
                <div className="overlay">
                    <h2 className="text-center my-3">Titolo</h2>
                    <p className="text-center">Autore</p>
                </div>
            </div>
        </div>
    )

    5) modifichiamo i valori presenti qui!

        1) nel primo div con col.12, dopo classname aggiungiamo:

        key = {book.id}

        questo identificherà quale libro inserire (li ordinerà in ordine cronologico dell'id!)

        2) nell'img, in src inseriamo:

        src = {book.image}
        alt = {book.author}

        questo metterà:

        - immagine del libro con id = presente

        - nome autore che troveremo se inspezioniamo l'immagine

        3) nel div contenente la class overlay, inseriamo i seguenti:

            1) nell'h2 ci sarà

            <h2>{books.title}</h2>

            2) nel p ci sarà

            <p>{books.author}</p>

        in questo modo avremo il nome del libro e l'autore dell'libro in base all'id che stiamo ciclando!


        ora abbiamo il lato FRONT-END con le tabelle visibili!


        EXTRA: PROPS

        facciamo in modo che la card sia un'elemento richiamabile, in modo tale che se dobbiamo metterla da un'altra parte, basta richiamare l'elemento senza riscriverlo tutto!

        questa chiamata si chiama PROPS!

        quindi:

        1) in components creiamo il file BookCard.jsx

        2) creiamo una constante chiamata BookCard, il cui contenuto sarà book (singolo elemento del libro cercato nel db in base all'id):

        const BookCard = ({ book }) =>{
            {/* CONTENUTO */}
        }

        export default BookCard

        3) qui dentro ci creiamo l'oggetto book con il destructoring degli elementi del database che vogliamo:

        const { title, image, author } = book

        4) in Homepage.jsx, tagliamo questo contenuto:

        <div className="col-12 col-md-6 col-lg-4" key = {book.id}>
            <div className="card">
                <img 
                    src = {book.image}
                    className="img-fluid"
                    alt = {book.author} 
                />
                <div className="overlay">
                    <h2 className="text-center my-3">{book.title}</h2>
                    <p className="text-center">{book.author}</p>
                </div>
            </div>
        </div>

        e lo mettiamo dentro ad un return in bookcard.jsx:

        return (
            <div className="col-12 col-md-6 col-lg-4" key = {book.id}>
                <div className="card">
                    <img 
                        src = {image}
                        className="img-fluid"
                        alt = {author} 
                    />
                    <div className="overlay">
                        <h2 className="text-center my-3">{book.title}</h2>
                        <p className="text-center">{author}</p>
                    </div>
                </div>
            </div>
        )

        NOTA: siccome qui abbiamo usato il destructoring, non abbiamo più bisogno di dichiarare il elemento.value, ma solo il value!

        5) in Homepage.jsx, importiamo Bookcard.jsx, e dentro al mapping, dove prima ci stava il contenuto della card, al suo interno mettiamo:
        const { id } = book;
        return <Bookcard key={id} book={book}></Bookcard> 

        quindi, in homepage prendiamo sempre l'id nel .map e tramite la props lo passiamo come value in Bookcard.jsx per visualizzare la card in base all'id, questo finche non visualizza tutti gli id nel database!

        in questo modo, adesso abbiamo una props che possiamo richiamare quando vogliamo se vogliamo creare la card con quei elementi!

___________________________________________________________

15) SINGLECARD



___________________________________________________________

16) REVIEWS









   





    
