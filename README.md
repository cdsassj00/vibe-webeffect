# vibe-webeffect — 웹 애니메이션 사전

> **효과를 눈으로 보고, 정확한 이름을 알고, 그 이름 그대로 AI에게 지시한다.**
> 코드를 직접 쓰지 않아도 된다 — **용어가 곧 능력**이다.

**브라우저의 재발견** 시리즈. 웹 애니메이션 72가지를 라이브 데모로 모은 사전 + 그 카탈로그로 AI 에이전트가 UI 작업에 어울리는 효과를 **추천·적용**해주는 스킬.

## 🔗 라이브 데모

**https://cdsassj00.github.io/vibe-webeffect/**

| 카테고리 | 효과 | 내용 |
|---|---|---|
| [스크롤 스크러빙](https://cdsassj00.github.io/vibe-webeffect/scroll-scrub-lab.html) | 18 | 스크롤이 곧 재생 헤드 — 패럴랙스 · 이미지 시퀀스 · 가로 갤러리 |
| [마우스 호버](https://cdsassj00.github.io/vibe-webeffect/hover-effects-lab.html) | 9 | 리프트 · 3D 틸트 · 마그네틱 · 스포트라이트 |
| [시그니처](https://cdsassj00.github.io/vibe-webeffect/signature-effects-lab.html) | 9 | 텍스트 스크램블 · 글리치 · 스티키 스택 |
| [등장·리빌](https://cdsassj00.github.io/vibe-webeffect/reveal-effects-lab.html) | 9 | IntersectionObserver — 페이드 업 · 라인 마스크 · 카운트업 |
| [마이크로 인터랙션](https://cdsassj00.github.io/vibe-webeffect/micro-interactions-lab.html) | 9 | 스프링 토글 · 좋아요 버스트 · 리플 · 에러 셰이크 |
| [로딩·상태](https://cdsassj00.github.io/vibe-webeffect/loading-states-lab.html) | 9 | 스켈레톤 시머 · 버튼 몰프 · 타이핑 인디케이터 |
| [실험실](https://cdsassj00.github.io/vibe-webeffect/insane-effects-lab.html) | 9 | 구이 메탈볼 · 매트릭스 레인 · ASCII 3D 도넛 · 홀로그램 |

모든 페이지는 **HTML 파일 하나**로 동작한다. 설치도, 서버도, 라이브러리도 없다.
각 효과 카드의 **‘?’** 버튼 → 준비물 · AI 지시문 · 핵심 코드.

## 🤖 AI 에이전트 스킬 설치

에이전트(Claude Code 등)가 웹 UI 작업 시 어울리는 애니메이션을 알아서 추천하고 적용합니다:

**방법 A — skills CLI (에이전트 선택 UI, skills.sh 생태계):**

```bash
npx skills add cdsassj00/vibe-webeffect
```
설치할 에이전트(Claude Code · Cursor · Codex · Copilot · Gemini CLI 등)를 체크박스로 선택하면
각 에이전트의 스킬 폴더에 자동 설치됩니다.

**방법 B — 전용 설치기 (프롬프트 없이 즉시):**

```bash
npx vibe-webeffect            # 현재 프로젝트 — .agents/skills + .claude/skills 동시 설치
npx vibe-webeffect --global   # 홈 디렉토리 (~/.agents/skills + ~/.claude/skills)
npx vibe-webeffect --agents   # .agents/skills 만 (크로스 에이전트 표준)
npx vibe-webeffect --claude   # .claude/skills 만 (Claude Code)
```

`.agents/skills/`는 [Agent Skills 오픈 표준](https://agentskills.io)의 크로스 에이전트 관례로,
**Codex · GitHub Copilot(VS Code) · Gemini CLI · Cursor · Goose · Amp · OpenCode** 등이 지원합니다.
Claude Code는 `.claude/skills/`를 읽으므로 기본값은 두 곳 모두 설치합니다 — 어느 에이전트를 쓰든 동작.

설치 후 에이전트에게 그냥 말하면 됩니다:

> "포트폴리오 랜딩페이지 만들어줘"
> → **라인 마스크 리빌(line mask reveal)** + **스태거 그리드(stagger children)** + **마그네틱 버튼(magnetic)** 추천 → 적용

### 스킬 동작 원리

1. **컨텍스트 파악** — 히어로? 폼? 갤러리? 데이터 로딩?
2. **카탈로그 매칭** — [`skills/vibe-webeffect/catalog.json`](skills/vibe-webeffect/catalog.json)의 72개 효과를 태그로 검색
3. **추천** — 정확한 이름(KR+EN) + 이유 + 전제조건과 함께 2~4개 제시
4. **적용** — [`skills/vibe-webeffect/references/recipes.md`](skills/vibe-webeffect/references/recipes.md)의 공용 패턴으로 코드 삽입
   (한 화면 bold 1개 제한 · `prefers-reduced-motion` 필수 · 의존성 0)

## 📁 구조

```
├── index.html ~ 7개 카테고리 페이지   ← 사람이 보는 사전 (GitHub Pages)
├── skills/vibe-webeffect/            ← Agent Skills 표준 구조 (npx skills add 호환)
│   ├── SKILL.md                      ← 에이전트 지침
│   ├── catalog.json                  ← 72개 효과 기계용 카탈로그
│   └── references/recipes.md         ← 공용 구현 패턴 9종
├── bin/install.js                    ← npx 설치기
└── package.json
```

## 브라우저의 재발견 시리즈

여러분 컴퓨터엔 이미 강력한 실행 환경이 깔려 있다 — **브라우저**.

- Ep.01 [Film Slicer](https://github.com/cdsassj00/redefine-browser-01) — 영상을 스크롤로 스크럽하는 페이지
- Ep.04 [Pyodide Lab](https://github.com/cdsassj00/redefine-browser-04.html-python) — 브라우저에서 파이썬
- **웹 애니메이션 사전 + vibe-webeffect** — 이 레포

## License

MIT © [cdsassj00](https://github.com/cdsassj00) · 신성진 (CDSA 한국데이터사이언티스트협회)
