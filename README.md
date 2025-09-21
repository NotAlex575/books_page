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

    6) cancelliamo app.css

    7) svuotiamo app.jsx e lascia solo questo

        function App() {
            const [count, setCount] = useState(0)

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


    
