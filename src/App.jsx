/**
 * App.jsx - 루트 컴포넌트
 * 비밀번호 입력 후 이용 가능 (아는 사람만 공유용).
 */
import { useState, useEffect } from 'react'
import './App.css'
import ExpTracker from './components/ExpTracker'

const GATE_KEY = 'maplelandtracker_gate'
// 비밀번호 평문 대신 SHA-256 해시만 저장 (개발자 도구에서 문자열 그대로 안 보이게)
const GATE_PASSWORD_HASH = '44b128beb0677cfdca4be9c85412e5a25f147dbed8208aac7a0062d35ba01db0'

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(GATE_KEY) === '1') setUnlocked(true)
    } catch (_) {}
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const trimmed = password.trim()
    if (!trimmed) return
    setSubmitting(true)
    try {
      const hash = await sha256(trimmed)
      if (hash === GATE_PASSWORD_HASH) {
        try {
          sessionStorage.setItem(GATE_KEY, '1')
        } catch (_) {}
        setUnlocked(true)
      } else {
        setError('비밀번호가 올바르지 않습니다.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  if (!unlocked) {
    return (
      <div className="app app-gate">
        <div className="app-gate-inner">
          <h1 className="app-gate-title">메이플랜드 트래커</h1>
          <p className="app-gate-desc">메트지지 · maplelandtracker.gg</p>
          <form onSubmit={handleSubmit} className="app-gate-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 (영문)"
              className="app-gate-input"
              autoFocus
              autoComplete="off"
              inputMode="latin"
              maxLength={32}
            />
            <button type="submit" className="app-gate-btn" disabled={submitting}>
              {submitting ? '확인 중…' : '입장'}
            </button>
          </form>
          {error && <p className="app-gate-error">{error}</p>}
        </div>
      </div>
    )
  }

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
