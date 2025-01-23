import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RecoilRoot } from 'recoil'
import App from './App.jsx'
import RecoilNexus from 'recoil-nexus'

createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <RecoilNexus />
        <App />
    </RecoilRoot>,

)
