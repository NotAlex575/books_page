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

    ora però rendiamo possibile la possibilità di passare su altre pagine!
    anticipiamo questo in modo tale che abbiamo già un router pronto per passare da pagina a pagina ovunque, siccome navbar sarà in ogni pagina!

    6) creiamo una componente layouts e creiamo un file Defaultlayout.jsx

    7) installiamo ora tramite terminal -> npm install react-router-dom

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
    
    8) come abbiamo fatto in App.jsx importiamo navbar sempre come prima riga
    import Navbar from "./components/Navbar";

    8) sempre dentro al <> </> e sopra <Outlet></Outlet> ci inseriamo 
    <Navbar></Navbar>

    9) ora che abbiamo il Defaultlayout con la navbar, rimuoviamo Navbar (sia import che <Navbar></Navbar>) da app.jsx e ci inseriamo il Defaultlayout:

        1) importiamo Defaultlayout.jsx in app.jsx attraverso 
        import Defaultlayout from "./layouts/Defaultlayout"

        2) ora creiamo il seguente:

        <BrowserRouter>
            <Routes>
                <Route element={<Defaultlayout></Defaultlayout>}>
                </Route>
            </Routes>
        </BrowserRouter>
