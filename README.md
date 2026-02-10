# 메이플랜드 트래커 (메트지지)

maplelandtracker.gg · 경험치 측정 등 메이플랜드 보조 기능을 제공하는 웹 앱입니다.

---

## 실행 방법

### 1. 의존성 설치 (최초 1회)

프로젝트 루트에서:

```bash
npm install
```

- `package.json` 에 적힌 라이브러리(react, react-dom, vite 등)가 `node_modules/` 에 설치됩니다.
- 서버 개발할 때의 “패키지 설치”와 같은 개념입니다.

### 2. 개발 서버 실행

```bash
npm run dev
```

- Vite 개발 서버가 뜹니다.
- 터미널에 나오는 주소(보통 `http://localhost:5173`)로 브라우저에서 접속하면 됩니다.
- 코드를 수정하면 **저장만 해도 브라우저가 자동으로 갱신**됩니다 (Hot Module Replacement).

### 3. 빌드 (배포용 파일 만들기)

```bash
npm run build
```

- `dist/` 폴더에 HTML, CSS, JS가 한 덩어리로 빌드됩니다.
- 이 폴더를 웹 서버에 올리면 실제 서비스할 수 있습니다.

### 4. 빌드 결과 미리 보기

```bash
npm run preview
```

- `dist/` 내용을 로컬에서 서빙해서, 배포 전에 확인할 때 씁니다.

---

## 프로젝트 구조 (프론트 초보용 설명)

```
MaplelandTracker/
├── index.html          # 브라우저가 처음 열 때 보는 HTML. <div id="root"> 와 main.jsx 로딩만 함
├── package.json        # 프로젝트 이름, 스크립트(npm run dev 등), 의존성 목록
├── vite.config.js      # Vite(빌드 도구) 설정. React 플러그인 등
├── public/             # 그대로 복사되는 정적 파일 (favicon.svg 등)
├── src/
│   ├── main.jsx        # 진입점. index.html → main.jsx → React 앱을 #root 에 그림
│   ├── App.jsx         # 루트 컴포넌트. 헤더 + 메인 영역 구조
│   ├── App.css         # App.jsx 전용 스타일
│   ├── index.css       # 전역 스타일 (body, #root 등)
│   └── components/     # 재사용할 UI 조각들
│       └── ExpTracker.jsx   # 경험치 측정 영역 (예정)
├── exp-measure-feature.md   # 경험치 측정 기능 설계 정리
└── README.md           # 이 파일
```

### 흐름 요약

1. **index.html**  
   브라우저가 이 파일을 연다 → `<script type="module" src="/src/main.jsx">` 로 **main.jsx** 를 불러온다.

2. **main.jsx**  
   `document.getElementById('root')` 로 HTML의 빈 div를 찾고, 그 안에 **App** 컴포넌트를 렌더링한다.

3. **App.jsx**  
   화면 전체 레이아웃(헤더, 메인)을 그리고, 메인 안에 **ExpTracker** 같은 자식 컴포넌트를 넣는다.

4. **components/***  
   버튼, 카드, 경험치 측정 UI처럼 **재사용 가능한 조각**을 여기 두고, `App.jsx` 나 다른 컴포넌트에서 `import` 해서 쓴다.

- **CSS**  
  - `index.css`: 전체 공통 스타일  
  - `App.css`: App 전용. 다른 컴포넌트는 각자 `.css` 를 만들고 해당 jsx에서 `import` 하면 됨.

---

## 사용 기술

- **React 18** (UI 라이브러리)
- **Vite** (개발 서버 + 빌드)
- **JavaScript (JSX)** — 나중에 TypeScript로 바꿀 수 있음

이제 `npm install` 후 `npm run dev` 로 실행해 보시면 됩니다.
