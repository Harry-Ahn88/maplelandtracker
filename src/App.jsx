/**
 * App.jsx - 루트 컴포넌트
 *
 * 전체 페이지의 최상위 컴포넌트입니다.
 * 여기서 공통 레이아웃(헤더, 메인 영역 등)을 두고,
 * 메인 영역에는 나중에 "경험치 측정", "다른 기능" 등 페이지/섹션을 넣을 수 있습니다.
 */
import './App.css'
import ExpTracker from './components/ExpTracker'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>메이플랜드 트래커</h1>
        <p className="tagline">메트지지 · maplelandtracker.gg</p>
      </header>
      <main className="app-main">
        <ExpTracker />
      </main>
    </div>
  )
}

export default App
