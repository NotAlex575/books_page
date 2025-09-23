# STEPLIST CREAZIONE WEBAPP LIBRERIA (PASSO PER PASSO)

Questa webapp avrà un db di libri a cui possiamo inserire delle recenzioni!

Dopo aver seguito i vari passaggi (fino al punto 7), iniziamo la parte front-end del progetto!

**INIZIAMO!**

---

## 8) REACT

iniziamo a creare il nostro progetto react!
seguiamo i seguenti passaggi per crearla!

1. apriamo il terminal

2. eseguiamo il comando

```bash
npm create vite@latest
```

3. qui inseriremo per esercitazione solo il nome del progetto (il resto per ora non ci serve), e lo chiamiamo per esempio `books_page`

4. fatto questo inseriamo il comando

```bash
cd books_page
```

per entrare col terminale nella path del progetto

5. inseriamo dei framework che ci saranno utili!

```bash
npm i axios
npm i bootstrap@5.3.8  # (o se si trova una versione più aggiornata scarica quella dal loro sito ufficiale)
npm install react-router-dom
```

6. cancelliamo `app.css`

7. svuotiamo `app.jsx` e lascia solo questo

```jsx
function App() {

    return (
        <>
            <h1>Hello world!</h1>
        </>
    )
}

export default App;
```

8. svuota anche `index.css`

ora abbiamo un progetto react vuoto che, all'avvio, ci mostrerà `hello world` nella pagina

---

## 9) PAGINE WEB

ora che abbiamo creato il progetto react, popoliamolo con delle pagine!

1. iniziamo col creare una cartella `components`

2. dentro quella cartella, creiamo un file `Navbar.jsx`

3. ora possiamo creare la navbar del nostro progetto, ecco a te un'esempio di uno scheletro della navbar:

```jsx
import React from 'react'

const Navbar = () => {
    return (
        <div>Navbar</div>
    )
}

export default Navbar
```

questo scheletro della navbar si può creare anche solo con un comando scritto proprio nel progetto!
`rafce` crea automaticamente questo!

Se abbiamo scaricato bootstrap, possiamo sfruttare questo framework per creare lo stile grafico della pagina (possiamo comunque usare `index.css` per fare dei nostri stili)

Se vuoi in futuro creare degli stili per una singola pagina, basta creare una cartella `modules`, il cui interno avrà i vari `file.module.css`

ma per ora:

4. usiamo bootstrap

es:

```jsx
import React from 'react'

const Navbar = () => {
    return (
        <header className="border bg-primary-subtle d-flex row">
            <h1>Questa è la navbar!</h1>
        </header>
    )
}

export default Navbar
```

5. adesso è necessario inserire `Navbar` dentro a `app.css` per vederlo, quindi andiamo in `app.jsx` e inseriamo:

1) alla prima riga l'import:

```jsx
import Navbar from "./components/Navbar";
```

2. dentro ai `<> </>` ci inseriamo

```jsx
<Navbar></Navbar>
```

adesso abbiamo una navbar visibile!

---

## 10) ROUTER

ora però rendiamo possibile la possibilità di passare su altre pagine!
anticipiamo questo in modo tale che abbiamo già un router pronto per passare da pagina a pagina ovunque, siccome navbar sarà in ogni pagina!

1. creiamo una componente `layouts` e creiamo un file `Defaultlayout.jsx`

2. installiamo ora tramite terminal -> `npm install react-router-dom` (se non lo abbiamo già fatto)

ora abbiamo il router, ma come lo implementiamo nel `Defaultlayout.jsx`? cosi!

```jsx
import { Outlet } from "react-router-dom"

const Defaultlayout = () => {
    return (
        <>
            <Outlet></Outlet>
        </>
    )
}

export default Defaultlayout
```

adesso abbiamo inserito nel layout il router, ma è vuoto a livello di contenuto... questo perchè adesso ci metteremo la nostra navbar!

3. come abbiamo fatto in `App.jsx` importiamo navbar sempre come prima riga

```jsx
import Navbar from "./components/Navbar";
```

4. sempre dentro al `<> </>` e sopra `<Outlet></Outlet>` ci inseriamo

```jsx
<Navbar></Navbar>
```

5. ora che abbiamo il `Defaultlayout` con la navbar, rimuoviamo `Navbar` (sia import che `<Navbar></Navbar>`) da `app.jsx` e ci inseriamo il `Defaultlayout`:

6. importiamo `Defaultlayout.jsx` in `app.jsx` attraverso

```jsx
import Defaultlayout from "./layouts/Defaultlayout"
```

2. ora creiamo il seguente:

```jsx
<BrowserRouter>
    <Routes>
        <Route element={<Defaultlayout></Defaultlayout>}>
        </Route>
    </Routes>
</BrowserRouter>
```

**INFO!**

cosa fanno `BrowserRouter`, `Routes` e `Route`?

1. `BrowserRouter` -> Gestisce l'intera logica di routing dell'app, ovvero tutti i componenti al suo interno

2. `Routes` -> è il contenitore delle varie route che metteremo al suo interno

3. `Route` -> gestisce la visibilità del singola pagina una volta che abbiamo eseguito la sua path (come tipo `/` o `/about`, etc.)

in questo modo ora l'elemento Defaultlayout ha a disposizione la possibilità di navigare tra le pagine dei componenti al suo interno

ma al momento non abbiamo neanche un collegamento che porta ad una determinata pagina (infatti ora abbiamo 0 collegamenti di route....)

l'esercizio attuale, è quello di creare le 2 seguenti pagine:

1. `Homepage.jsx` che contiene la lista dei libri

2. `SingleMovie.jsx`, che comprenderà solo il dettaglio di 1 singolo libro (il singolo libro sarà scelto in base al libro cliccato)

quindi...

---

## 11) PAGINE

iniziamo col creare 2 pagine, che tramite l'uso delle route saranno raggiungibili!

1. creiamo un folder `pages`, in cui ci inseriamo le varie pagine in cui vogliamo navigare

2. creiamo la prima pagina, ovvero la `Homepage`, creando un nuovo file dentro il folder pages, chiamato `Homepage.jsx`

3. dentro a `Homepage.jsx` eseguiamo sempre `rafce`, che farà comparire questo scritto:

```jsx
const Homepage = () => {
    return (
        <div className="text-center fs-1 fw.bold mb-5">Homepage</div>
    )
}

export default Homepage
```

4. creato lo scheletro della Homepage, facciamo in modo che sia visibile nella pagina, quindi in `app.jsx`, importiamo `Homepage.jsx` sopra con tutti gli import già messi, e dentro a
   `<Route element={<Defaultlayout></Defaultlayout>}>`, ci andiamo ad inserire:

```jsx
<Route path="/" element={<Homepage></Homepage>}></Route>
```

così facendo, ogni volta che saremo nella path iniziale della pagina (siccome abbiamo messo come path "/"), apparirà la homepage!

ora non ci resta che creare `SingleMovie.jsx`, eseguire di nuovo `rafce` per creare il suo scheletro e importarlo in `app.jsx`, sempre con l'uso dell'import.

ora però dobbiamo considerare che non è necessario creare un'altra path (perchè alla fine rimaniamo sempre nella pagina principale, ma mostrando solo un'elemento!), quindi andiamo a spezzettare ciò in questa maniera:

```jsx
<Route path="/">
    <Route path = "" element={<Homepage></Homepage>}></Route>
    <Route path = ":id" element={<SingleMovie></SingleMovie>}></Route>
</Route>
```

cosa abbiamo fatto?

abbiamo una path unica, dove la pagina principale è homepage, ma se in futuro, dopo aver messo il lato logico, cliccheremo un libro, passeremo direttamente a vedere il `SingleMovie`

inizia col sbizzarrirti col html e css per la struttura grafica della homepage!

se ti serve ti metto un'esempio!

### 1) HOMEPAGE (esempio)

```jsx
const Homepage = () => {
    return ()
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
                <!-- altre card... -->
            </div>
        </div>
    )
}

export default Homepage
```

**NOTA!** qui ho creato nella cartella `public` una cartella `img` contenente un `img.jpg` chiamato `sample.jpg` (se non hai 1 immagine, scaricane 1 dal web, la rinomi come vuoi e la metti dentro la cartella, poi dentro `img src = "./img/nomeFoto.jpg"` o `png` se hai scaricato la foto in formato png)

---

### 2) NAVBAR -> esempio semplificato

```jsx
const Navbar = () => {
    return (
        <header className="bg-orange">
            <h1>Questa è la navbar!</h1>
        </header>
    )
}

export default Navbar
```

### 3) `index.css` -> esempi di stili aggiunti

```css
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
```

fatto ciò abbiamo un vero e proprio scheletro della nostra homepage, con 5 card dei """libri""".

ma ora vediamo di inserire la nostra vera lista di libri, usando il database che abbiamo creato!

---

## 12) AXIOS E useState / useEffect

iniziamo ad includere all'interno di `Homepage` i seguenti import:

```jsx
import axios from "axios"
import { useState, useEffect } from "react"
```

la libreria axios serve per fare le chiamate HTTP (GET, POST, PUT, DELETE, ecc.) verso un server o un’API (in questo caso ci riferiremo al database)

`useState` -> Serve per salvare e cambiare un valore dentro al componente.

`useEffect` -> Serve per fare qualcosa quando il componente si carica o cambia stato.

ora dentro a `const Homepage` e prima del `return`, andiamo ad eseguire i seguenti passaggi:

1. dichiariamo le variabili di stato, attraverso

```jsx
const [books, setBooks] = useState([])
```

2. ora recuperiamo i libri nel database attraverso la chiamata ajax, che verrà eseguita alla chiamata della function `fetchBooks`:

```jsx
const fetchBooks = () => {
    axios.get("http://localhost:3000/books")
};
```

3. recuperiamo, li dobbiamo settare come response, quindi continuando la chiamata ajax:

```jsx
const fetchBooks = () => {
    axios.get("http://localhost:3000/books")
    .then((resp) => {
        setBooks(resp.data);
    })
    .catch((err) => console.log(err));
};
```

nel `.then` recuperiamo la lista di libri e la mettiamo nei `books` (attraverso `setBooks`), il cui value sarà la value entro `axios.get` (e come se fosse la chiamata query che abbiamo fatto su postman, ma con la differenza che qui salviamo i valori!)

4. creiamo un `useEffect` per richiamare la function, alla prima esecuzione del progetto e ogni volta che viene eseguita una modifica!

```jsx
useEffect(fetchBooks, [])
```

vogliamo vedere se cicla i libri presenti nel database? scriviamo sotto `setBooks(resp.data);`

```jsx
console.log(resp.data);
```

avviamo sia `books_page` che il progetto backend che abbiamo preparato prima, apriamo anche il database in mysql (se non lo hai gia aperto), entriamo nella connection che avevamo creato, entriamo nella pagina localhost aperta qui, clicchiamo f12 per vedere se ci mostra la lista di libri, eeeeeeeeee.....

**Errore CORS possibile:**

```
Access to XMLHttpRequest at 'http://localhost:3000/books' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

comparirà questo errore.... MA PERCHE?

perchè il browser sta bloccando la richiesta, poichè ci sono due origini diverse (porte diverse = origini diverse).

Per permettere la comunicazione, dobbiamo fare in modo che la parte backend accetti richieste dalla parte del frontend!

---

**Nota:** per risolvere bisogna modificare il backend (esempio: abilitare CORS nelle impostazioni del server) — da lì parti al passaggio 13 (non incluso qui).

---

## 14) LISTA.MAP

adesso cicliamo ogni singolo elemento presente nel database e mostriamo nella pagina!

abbiamo già fatto la chiamata ajax, ora non resta che mostrarla in pagina, e per fare questo cicliamo la lista del database con un mapping (`.map`), dove prenderà ogni elemento presente nella lista, con i value che poi vogliamo vedere!

1. torniamo in `Homepage.jsx` e teniamoci solo:

```jsx
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
```

modifichiamolo:

2. sotto il div contenente il `row`, aggiungiamoci un'altro `row`, come questo:

```jsx
<div classname = "row gy-3"></div>
```

3. dentro a questo container inseriamoci il ciclo del `.map`

```jsx
{books.map(book => {
    return(
        {/* contenuto loopato! */}
    )
})}
```

4. dentro adesso al `return` inseriamo i dati che vogliamo inserire e loopare!

```jsx
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
```

5. modifichiamo i valori presenti qui!

* nel primo div con `col.12`, dopo `classname` aggiungiamo:

```jsx
key = {book.id}
```

* nell'`img`, in `src` inseriamo:

```jsx
src = {book.image}
alt = {book.author}
```

* nel div contenente la class `overlay`, inseriamo i seguenti:

```jsx
<h2>{book.title}</h2>
<p>{book.author}</p>
```

in questo modo avremo il nome del libro e l'autore dell'libro in base all'id che stiamo ciclando!

**EXTRA: PROPS**

facciamo in modo che la card sia un'elemento richiamabile, in modo tale che se dobbiamo metterla da un'altra parte, basta richiamare l'elemento senza riscriverlo tutto!

1. in `components` creiamo il file `BookCard.jsx`

2. creiamo una constante chiamata `BookCard`, il cui contenuto sarà `book` (singolo elemento del libro cercato nel db in base all'id):

```jsx
const BookCard = ({ book }) =>{
    {/* CONTENUTO */}
}

export default BookCard
```

3. qui dentro ci creiamo l'oggetto `book` con il destructoring degli elementi del database che vogliamo:

```jsx
const { title, image, author } = book
```

4. in `Homepage.jsx`, tagliamo il contenuto della card e lo mettiamo dentro ad un return in `BookCard.jsx`:

```jsx
return (
    <div className="col-12 col-md-6 col-lg-4" key = {book.id}>
        <div className="card">
            <img
                src = {image}
                className="card-img"
                alt = {author}
            />
            <div className="overlay">
                <h2 className="text-center my-3">{book.title}</h2>
                <p className="text-center">{author}</p>
            </div>
        </div>
    </div>
)
```

ho aggiunto anche un contenuto nell' `index.css`:

```css
.card-img {
    max-width: 600px;          
    height: 600px;        
    object-fit: contain;   
    background-color: #f0f0f0;
    display: block;
}
```

5. in `Homepage.jsx`, importiamo `BookCard.jsx`, e dentro al mapping, dove prima ci stava il contenuto della card, al suo interno mettiamo:

```jsx
const { id } = book;
return <Bookcard key={id} book={book}></Bookcard>
```

in questo modo, adesso abbiamo una props che possiamo richiamare quando vogliamo se vogliamo creare la card con quei elementi!

---

## 15) SINGLECARD (LINK)

ora facciamo in modo tale che le card diventino cliccabili, e con il click entrino nella pagina che avevamo creato all'inizio (`SingleBook.jsx`), con la card singola e, sotto, le recensioni del libro!

1. in `BookCard` importiamo `Link`:

```jsx
import { Link } from "react-router-dom";
```

2. nella const, dove facciamo il destructoring:

```jsx
const {title, image, author } = book
```

ci aggiungiamo `id`:

```jsx
const {id, title, image, author } = book
```

3. dentro alla card creata, mettiamo tutto il suo contenuto dentro a `<Link></Link>`:

```jsx
<Link className="text-decoration-none" to={`/${id}`}>
    {/* contenuto card */}
</Link>
```

il `{`/\${id}`}` ci servirà per passare nella pagina `SingleBook`, attraverso il link che abbiamo impostato in `app.jsx`, ovvero questo:

```jsx
<Route path = ":id" element={<SingleBook></SingleBook>}></Route>
```

4. in `SingleBook` iniziamo col importare i seguenti:

```jsx
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"
```

`useNavigate` ci servirà dopo!

5. dichiariamo le constanti dentro a `const SingleBook`, per poi dopo mostrare la card specifica!

```jsx
const { id } = useParams();
const [book, setBook] = useState([]);
const [totalBooks, setTotalBooks] = useState();
```

6. come nella homepage, facciamo il `fetchBook`, ma con la differenza che, la nostra chiamata axios avrà in più l'id:

```jsx
axios.get(`http://localhost:3000/books/${id}`)
```

in questo modo, noi entriamo nella pagina `/valoreId`

7. dentro al `return` creiamo il nostro html

esempio:

```jsx
<div className="container my-5">
    <div className="row mb-100">
        <div className="col-12 text-center">
            <h1>Bookly</h1>
            <h2>
                <i>Libri per i veri appassionati!</i>
            </h2>
        </div>
    </div>
    <div className="row gy-3">
        <div className="col-12">
            <div className="card medium-card">
            <img
                src = {"./img/sample.jpg"}
                className="img-fluid"
                alt = {book.author}
            />
                <div className="overlay">
                <h2 className="text-center my-3">{book.title}</h2>
                <p className="text-center">{book.author}</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

ho aggiunto anche qualcosina nell'`index.css`:

```css
.medium-card {
    max-width: 700px;
    margin: 0 auto;
}

.medium-card img {
    max-height: 700px;
    object-fit: cover;
}
```

**EXTRA:** Se vuoi, possiamo fare anche che la card singola si richiami con un'altra props!

1. basta creare in `components` un'altro file chiamato ad esempio `Bookcard_selected.jsx`, e al suo interno ci mettiamo tutto quello che ci sta dentro al `<div className="row gy-3">`!

esempio:

```jsx
const Bookcard_selected = ({book}) => {
    const {id, title, image, author } = book
    return (
        <div className="col-12">
            <div className="card medium-card">
            <img
                src = {"./img/sample.jpg"}
                className="img-fluid"
                alt = {author}
            />
                <div className="overlay">
                <h2 className="text-center my-3">{title}</h2>
                <p className="text-center">{author}</p>
                </div>
            </div>
        </div>
    )
}

export default Bookcard_selected
```

2. in `SingleBook.jsx` eseguiamo l'import della props:

```jsx
import Bookcard_selected from "../components/Bookcard_selected"
```

3. poi rimpiazziamo il contenuto di:

```jsx
<div className="row gy-3">
```

in questo!

```jsx
<div className="row gy-3">
    <Bookcard_selected key={id} book={book}></Bookcard_selected>
</div>
```

ora abbiamo una pagina visibile, che col click di un libro presente nella homepage, mi porta nella pagina singola, con il libro singolo!

---

## 16) BUTTON (GO NEXT PAGE, GO PREVIOUS PAGE, GO HOMEPAGE)

un'altra funzionalità che possiamo implementare nel nostro progetto della card singola è l'uso dei bottoni che, con il click di uno di questi eseguira un'azione specifica (in questo caso andare al libro successivo/precedente della lista o tornare alla homepage con tutti i libri visibili)!

1. adesso sfrutteremo lo `useNavigate` che abbiamo implementato prima, creando una variabile fissa chiamata `naviga`, che userà lo `useNavigate`!

```jsx
const naviga = useNavigate();
```

2. creata la chiamata allo `useNavigate`, creiamo 3 function diverse!

* `goPrevPage`:

```jsx
const goPrevPage = () => {
    const page = parseInt(id) - 1;
    naviga("/" +page);
}
```

* `goNextPage`:

```jsx
const goNextPage = () => {
    const page = parseInt(id) + 1;
    naviga("/" +page);
}
```

* `goHomepage`:

```jsx
const goHomepage = () => {
    naviga("/");
}
```

3. implementiamo una function `fetchTotalBooks` (sotto al `fetchBook`), per avere anche la length dei libri nel database!

```jsx
const fetchTotalBooks = () => {
    axios.get("http://localhost:3000/books")
    .then(resp => setTotalBooks(resp.data.length))
    .catch(err => console.log(err));
};
```

questo pezzo, ci servirà nel prossimo punto, capirete perchè!

4. adesso implementiamo 3 bottoni, che verranno usati per fare il cambio pagina!

esempio di struttura:

```jsx
<div className="flex-row">
    <button className="btn btn-primary btn-prev-next"
        disabled={book.id === 1}
        onClick={goPrevPage}>
        Vai al libro precedente
    </button>
    <button className="btn btn-primary btn-prev-next margin-left-right-50"
        onClick={goHomepage}>
        Torna alla homepage
    </button>
    <button className="btn btn-primary btn-prev-next"
        disabled={book.id === totalBooks}
        onClick={goNextPage}>
        Vai al libro successivo
    </button>
</div>
```

anche qui ho inserito un po' di css!

```css
.btn-prev-next{
    margin-top: 50px;
    margin-bottom: 50px;
    height: 60px;
    width: 200px;
}

.margin-left-right-50{
    margin-left: 50px;
    margin-right: 50px;
}
```

**NOTA!** notate qualcosa in questo html??

c'è un `disabled` con una condizione — serve a disabilitare il bottone quando la condizione è vera (es. primo libro o ultimo libro)

---

## 17) PAGE NOT FOUND

**DOMANDA:** Cosa succede se nel url del nostro sito, sapendo che il totale dei libri è 5, ci andiamo a mettere `5000`?

**RISPOSTA:** Succede che carica comunque una pagina, ma noi non vogliamo quella pagina!

stessa cosa se scriviamo tipo `http://localhost:3000/pippo`

nella console, mostrerà l'errore, ma non ci porta da nessuna parte, e dobbiamo permettere all'utente di capire che ha sbagliato pagina!

creeremo adesso una pagina dedicata al `notfound` (error 404)!

1. creiamo un nuovo file in `pages`, chiamato `NotFoundPage.jsx`

2. creiamoci un html al suo interno, anche con un button per tornare alla homepage!

esempio:

```jsx
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className='h-100 flex flex-column align-items-center justify-content-center'>
            <h2>Page not found....</h2>
            <p className='my-3'>La pagina cercata non esiste</p>
            <Link className="btn btn-danger" to="/">
                Torna alla homepage
            </Link>
        </div>
    )
}

export default NotFoundPage
```

3. in `app.jsx` importiamo `NotFoundPage.jsx` e lo mettiamo qui:

```jsx
<Route path="/">
    <Route path = "" element={<Homepage></Homepage>}></Route>
    <Route path = ":id" element={<SingleBook></SingleBook>}></Route>
    <Route path = "*" element={<NotFoundPage></NotFoundPage>}></Route>
</Route>
```

con l'`*`, includiamo tutte le path che possono essere scritte nel link http che non sono incluse nelle altre path della route padre!

4. in `SingleBook.jsx`, nella constante `fetchBook`, si trova un `catch(err)`, ma solo con un `console.log`! cosi non funziona!

quindi sostituiamo il `console.log` con la variabile che tiene lo `useNavigate` (nel caso mio -> `naviga`)

```jsx
.catch((err) => naviga("not-found"));
```

così facendo, ogni volta che va nel `catch`, come nell'esempio iniziale (es. cerca il libro con id 5000), anziché stare sempre nella pagina `SingleBook`, ora va in `NotFoundPage`!

---

## 18) REVIEWS

siccome noi nel nostro database, abbiamo anche le `reviews` del libro, inseriamole nel `SingleBook`!

1. Creiamo direttamente la component props di Reviews (qui l'ho chiamata `ReviewCard`), in `components`!

2. esempio di HTML/JSX per la review:

```jsx
const ReviewCard = ( {review} ) => {

    const {name, text, vote} = review
    return (
        <div className="review-card">
            <h3>{name}</h3>
            <p>Voto: {vote}</p>
            <p>{text}</p>
        </div>
    )
}

export default ReviewCard
```

3. in app.jsx, importiamo la ReviewCard

4. creiamo il lato html della ReviewCard!

esempio di html per la ReviewCard:

```jsx
    <div className="reviews">
        {book.reviews ? 
        (book.reviews.map((review) => {
            return <ReviewCard review={review}></ReviewCard>
        })):(
        <h2>
            <em>Non ci sono ancora recensioni per questo libro</em>
        </h2>
        )}
    </div>
```

EXTRA

facciamo in modo che, anziche vedere un numero, mostri le stelline nella review!

5. importiamo fontawesome nel nostro programma!

tramite il comando da mettere nel terminal:

npm install @fortawesome/fontawesome-free

6. creiamo un'altra props, chiamata StarRating.jsx

7. creiamo il lato html dello StarRating!

esempio di html per lo StarRating:

```jsx
    const StarRating = ({vote}) => {
        const nums = [1, 2, 3, 4, 5];
        const starArray = nums.map((num, i) => {
            console.log(num, i)
            if(i < vote){
                return <i className="fa-solid fa-star"></i>
            }
            else{
                return "";
            }
        })
        return starArray
    }

    export default StarRating
```

questo const calcolerà il numero di stelle da inserire, usando l'array nums che va da 1 (1 stella) a 5 (5 stelle), e in base al valore vote che gli passiamo, farà il map, finche non trova il numero che gli abbiamo passato!

per esempio, se noi abbiamo il libro con una recensione da voto 3, la ReviewCard passerà il valore { vote } => { 3 } e ritornerà 3 stelle "fa-solid fa-star"!

per fare ciò però:

8) implementiamo StarRating in ReviewCard:

import StarRating from "./StarRating"

9) dentro al p contentente il voto: {voto}, lo sostituiamo con questo:

```jsx

    <p>Voto: <StarRating vote={vote}></StarRating></p>

```

adesso, ogni recensione, anziche il numero, avrà delle stelline!

---


