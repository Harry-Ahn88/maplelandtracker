/**
 * 진입점 (Entry Point)
 *
 * 1. index.html 에서 <script type="module" src="/src/main.jsx"> 로 이 파일을 불러옵니다.
 * 2. ReactDOM.createRoot 로 id="root" 인 DOM 요소를 찾아서,
 * 3. 그 안에 <App /> 컴포넌트를 렌더링합니다.
 *
 * 여기서는 거의 수정하지 않고, 실제 화면은 App.jsx / components 에서 만듭니다.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
