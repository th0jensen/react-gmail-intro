import './styles/App.css'
import Header from './components/Header'
import { Sidebar } from './components/Sidebar'
import Email from './components/Email'

function App() {
    return (
        <div className="app">
            <Header />
            <Sidebar />
            <Email />
        </div>
    )
}

export default App
