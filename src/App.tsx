const basePath = import.meta.env.BASE_URL;

const lessonGoals = [
  {
    step: '학습목표 1',
    title: '분석 결과를 보고서 언어로 바꾸기',
    body: '수율, 불량, 설비 상태, 문서 요약 결과를 그대로 붙여 넣지 않고 의사결정자가 읽는 문장과 표로 재구성합니다.',
  },
  {
    step: '학습목표 2',
    title: 'Markdown/HTML 보고서 자동화 구조 이해',
    body: '입력 데이터, 계산 지표, 시각화, 해석 문장, 액션 아이템이 어떤 순서로 조립되는지 파이프라인으로 이해합니다.',
  },
  {
    step: '학습목표 3',
    title: 'AI 작업지시서로 주간 보고서 만들기',
    body: 'AI에게 맡길 계산, 사람이 검토할 근거, 최종 배포 전 체크리스트를 분리해 반복 보고 업무를 자동화합니다.',
  },
];

const lessonFlow = [
  { time: '4분', label: '1~9강 연결' },
  { time: '8분', label: '보고서 구조' },
  { time: '10분', label: '데이터 상자 설계' },
  { time: '13분', label: 'AI 지시서 실습' },
  { time: '5분', label: '검증/배포 기준' },
];

const previousFlow = [
  { range: '01~02강', title: 'AI에게 정확히 지시하기', result: '역할, 입력, 산출물, 검증 기준을 갖춘 프롬프트' },
  { range: '03~04강', title: 'MES/설비 데이터 다루기', result: '병합, 요약, 결측/이상치 정제 흐름' },
  { range: '05~08강', title: '공정 상태를 그림으로 보기', result: '히트맵, 관리도, 산점도, 파레토/트렌드' },
  { range: '09강', title: '기술 문서에서 근거 찾기', result: '에러 코드, 매뉴얼 조치, 주의사항 요약' },
  { range: '10강', title: '분석 결과를 보고서로 조립하기', result: '주간/월간 보고서 자동 생성기' },
];

const dataBoxes = [
  { label: '수율', value: '94.8%', note: '전주 대비 +1.6%p', tone: 'good' },
  { label: 'Top 불량', value: 'Particle', note: '전체 불량의 41%', tone: 'warn' },
  { label: 'OOC 설비', value: 'ETCH-03', note: '압력 2회 연속 관리선 초과', tone: 'alert' },
  { label: '조치 필요', value: '3건', note: '원인 가설과 담당자 지정 필요', tone: 'neutral' },
];

const reportSections = [
  {
    no: '1',
    title: 'Executive Summary',
    body: '이번 주 가장 중요한 변화 3가지를 먼저 제시합니다. 숫자, 원인 후보, 필요한 의사결정을 한 문단으로 압축합니다.',
  },
  {
    no: '2',
    title: 'KPI Snapshot',
    body: '수율, 불량률, OOC 횟수, 재작업률처럼 매주 반복되는 지표를 같은 위치에 고정해 비교 가능하게 만듭니다.',
  },
  {
    no: '3',
    title: 'Root Cause Evidence',
    body: '파레토, 트렌드, 산점도, 매뉴얼 근거를 묶어 왜 그런 판단을 했는지 추적 가능한 증거로 남깁니다.',
  },
  {
    no: '4',
    title: 'Action Items',
    body: '누가, 언제까지, 어떤 데이터를 추가 확인할지 명시합니다. 보고서는 결론보다 다음 행동이 중요합니다.',
  },
];

const practiceSteps = [
  { label: '입력', text: 'CSV 3개: lot_summary, defect_log, equipment_alarm' },
  { label: '계산', text: '전주 대비 변화율, Top 3 불량, OOC 설비, 위험 등급' },
  { label: '시각화', text: '파레토, 수율 추이, 설비별 알람 막대, 원인 후보 표' },
  { label: '서술', text: '요약 문장, 원인 가설, 현장 확인 요청, 다음 주 계획' },
  { label: '출력', text: 'Markdown 초안과 HTML 보고서, 회의 공유용 1페이지' },
];

const promptChecklist = [
  '데이터 컬럼 정의와 단위를 먼저 설명한다.',
  'AI가 계산해야 할 지표와 사람이 검토할 판단을 분리한다.',
  '숫자 근거 없이 단정 문장을 만들지 말라고 명시한다.',
  '보고서 수신자를 팀장, 공정 엔지니어, 장비 담당자로 지정한다.',
  '마지막에 검증표와 누락 데이터 질문을 생성하게 한다.',
];

const evaluationRubric = [
  { item: '정확성', desc: '원본 CSV와 보고서 숫자가 일치하는가' },
  { item: '추적성', desc: '문장마다 근거 지표나 출처가 남아 있는가' },
  { item: '가독성', desc: '회의 전에 3분 안에 핵심 위험을 파악할 수 있는가' },
  { item: '실행성', desc: '담당자와 다음 액션이 모호하지 않은가' },
];

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-top">
          <div className="logo-group">
            <img
              src={`${basePath}logo.png`}
              alt="LettUin Edu"
              className="header-logo"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="header-tag-container">
            <span className="header-tag">AI를 지휘하는 스마트한 엔지니어의 시작</span>
          </div>
        </div>

        <div className="hero-section">
          <p className="eyebrow">Ch.10</p>
          <h1>
            <span>데이터 기반</span>
            <span>주간/월간 보고서</span>
            <span>자동 생성</span>
          </h1>
          <p className="subtitle">
            1~9강에서 만든 분석 결과를 반복 보고 업무에 바로 쓰는 Markdown/HTML 교안
          </p>
          <div className="lesson-meta" aria-label="lesson summary">
            <span>40분</span>
            <span>실습 포함</span>
            <span>보고서 자동화</span>
            <span>P2 연결</span>
          </div>
        </div>
      </header>

      <main>
        <section className="overview-section">
          <span className="section-label">01. 오프닝 및 학습목표</span>
          <h2>오늘의 목표는 분석을 더 많이 하는 것이 아니라, 이미 만든 분석을 매주 반복 가능한 보고서 시스템으로 바꾸는 것입니다</h2>
          <p className="section-intro">
            앞 강의에서 배운 데이터 병합, 정제, 시각화, 기술 문서 요약은 각각 좋은 도구입니다. 10강에서는 이 도구들이 흩어진 결과물로 끝나지 않도록, 수율 회의와 월간 리뷰에 바로 제출할 수 있는 보고서 흐름으로 묶습니다.
          </p>
          <div className="learning-goals-grid" aria-label="학습목표">
            {lessonGoals.map((item) => (
              <article className="learning-goal-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="lesson-timeline" aria-label="40분 강의 진행표">
            {lessonFlow.map((item) => (
              <div className="timeline-step" key={item.label}>
                <strong>{item.time}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">02. 1~9강 흐름과 10강의 위치</span>
          <h2>10강은 별도 기능을 하나 더 배우는 시간이 아니라, 지금까지 만든 기능을 보고 체계로 연결하는 전환점입니다</h2>
          <p className="section-intro">
            공식 커리큘럼의 10강 주제는 데이터 기반 주간/월간 보고서 자동 생성입니다. 따라서 오늘 교안은 “분석 도구를 만들었다”에서 “팀이 매주 쓰는 산출물로 만들었다”로 넘어가는 구조를 따릅니다.
          </p>
          <div className="flow-table">
            {previousFlow.map((item) => (
              <div className="flow-row" key={item.range}>
                <strong>{item.range}</strong>
                <h3>{item.title}</h3>
                <p>{item.result}</p>
              </div>
            ))}
          </div>
          <figure className="image-panel">
            <img src={`${basePath}images/report_pipeline.png`} alt="1강부터 10강까지 이어지는 보고서 자동화 파이프라인" />
            <figcaption>Python으로 생성한 파이프라인 그림: 데이터 정리, 분석, 해석, 보고서 출력이 한 흐름으로 이어집니다.</figcaption>
          </figure>
        </section>

        <section className="teaching-section">
          <span className="section-label">03. 보고서가 담아야 할 데이터 상자</span>
          <h2>좋은 자동 보고서는 화려한 문장보다 매주 같은 위치에 놓이는 핵심 지표 상자에서 시작합니다</h2>
          <p className="section-intro">
            수강생은 먼저 주간 보고서 첫 화면에 들어갈 지표를 정합니다. 아래 예시는 공정 엔지니어가 회의 전에 빠르게 확인해야 하는 네 가지 상자입니다.
          </p>
          <div className="metric-grid" aria-label="주간 보고 핵심 데이터 상자">
            {dataBoxes.map((item) => (
              <article className={`metric-card ${item.tone}`} key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
          <div className="two-column">
            <figure className="image-panel compact">
              <img src={`${basePath}images/weekly_dashboard.png`} alt="주간 보고서 대시보드 예시" />
              <figcaption>수율 추이, 불량 파레토, 설비 알람을 한 페이지에 배치한 예시입니다.</figcaption>
            </figure>
            <div className="note-panel">
              <strong>강의 포인트</strong>
              <p>
                보고서 자동화에서 AI가 가장 잘하는 일은 “초안 생성”입니다. 숫자 계산은 코드로 고정하고, AI는 숫자의 의미를 설명하게 해야 재현성과 신뢰도가 올라갑니다.
              </p>
            </div>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">04. 보고서 템플릿 설계</span>
          <h2>Markdown 보고서는 작성하기 쉽고, HTML 보고서는 공유하기 쉽습니다. 두 형식을 같은 뼈대에서 생성하도록 설계합니다</h2>
          <p className="section-intro">
            자동 보고서는 매번 새로 쓰는 문서가 아니라 빈칸을 채우는 템플릿입니다. 수강생은 보고서의 고정 섹션을 먼저 설계하고, 각 섹션에 어떤 데이터와 문장이 들어갈지 연결합니다.
          </p>
          <div className="report-blueprint">
            {reportSections.map((section) => (
              <article className="blueprint-card" key={section.no}>
                <span>{section.no}</span>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
          <figure className="image-panel">
            <img src={`${basePath}images/report_template.png`} alt="Markdown과 HTML 보고서 템플릿 구성 예시" />
            <figcaption>같은 입력 데이터에서 Markdown 초안과 HTML 공유 페이지가 함께 생성되는 구조입니다.</figcaption>
          </figure>
        </section>

        <section className="teaching-section">
          <span className="section-label">05. 실습: AI 작업지시서 만들기</span>
          <h2>실습의 핵심은 “보고서를 만들어줘”가 아니라 입력, 계산, 시각화, 서술, 검증을 분리해서 지시하는 것입니다</h2>
          <p className="section-intro">
            아래 5단계를 한 번에 지시하면 AI가 임의로 판단하기 쉽습니다. 각 단계의 책임을 나누면 수강생은 코드 생성 결과를 검토하고 수정하기 쉬워집니다.
          </p>
          <div className="practice-ladder">
            {practiceSteps.map((step) => (
              <div className="practice-step" key={step.label}>
                <strong>{step.label}</strong>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="prompt-box">
            <strong>수강생 실습 프롬프트 골격</strong>
            <pre>{`너는 디스플레이 공정 엔지니어의 보고서 자동화 조교다.
입력 CSV 3개를 기준으로 주간 공정 보고서 초안을 만든다.
1. 수율, Top 불량, OOC 설비를 계산한다.
2. 숫자 근거가 있는 문장만 작성한다.
3. Markdown 보고서와 HTML 섹션 구조를 함께 제안한다.
4. 원인 가설은 확정 표현이 아니라 확인 필요 항목으로 쓴다.
5. 마지막에 검증 체크리스트와 누락 데이터 질문을 만든다.`}</pre>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">06. 검증 기준과 마무리</span>
          <h2>보고서 자동화의 품질은 예쁜 화면이 아니라 회의에서 바로 의사결정에 쓰일 수 있는지로 판단합니다</h2>
          <p className="section-intro">
            수강생은 자동 생성 결과를 그대로 제출하지 않습니다. 숫자, 근거, 문장, 다음 액션을 검증한 뒤에만 공유하도록 마무리합니다.
          </p>
          <div className="checklist-layout">
            <div className="checklist-panel">
              <strong>작업지시서 체크리스트</strong>
              <ul>
                {promptChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rubric-table">
              {evaluationRubric.map((row) => (
                <div className="rubric-row" key={row.item}>
                  <strong>{row.item}</strong>
                  <p>{row.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="closing-panel">
            <strong>다음 강의 연결</strong>
            <p>
              10강의 결과물은 P2 실무 자동화 보고서 앱의 뼈대가 됩니다. 이후 11강부터는 보고서에 들어갈 판단 로직을 더 고도화해 골든 레시피, 시뮬레이션, 이미지 측정, 재고 예측으로 확장합니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
