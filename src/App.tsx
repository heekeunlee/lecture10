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

const sampleDatasets = [
  {
    file: 'lot_summary.csv',
    use: '주간 KPI 요약',
    columns: 'lot_id, line, yield, rework, scrap',
    example: 'A24051, L2, 94.8, 1.2, 0.4',
  },
  {
    file: 'defect_log.csv',
    use: '불량 파레토',
    columns: 'defect_type, count, week, chamber',
    example: 'Particle, 41, W-24, ETCH-03',
  },
  {
    file: 'equipment_alarm.csv',
    use: 'OOC/알람 추적',
    columns: 'tool, signal, value, timestamp',
    example: 'ETCH-03, pressure, 1.18, 2026-05-17 09:42',
  },
];

const beforeAfter = [
  {
    kind: 'before',
    title: '수동 보고',
    items: ['엑셀 파일 3개 열기', '차트 캡처 후 붙여넣기', '문장 수동 작성', '회의 직전 숫자 재확인'],
  },
  {
    kind: 'after',
    title: '자동 보고',
    items: ['CSV 업로드', 'KPI/차트 자동 계산', 'AI가 해석 초안 작성', 'Markdown/HTML 동시 출력'],
  },
];

const reportMock = [
  {
    title: '이번 주 핵심',
    value: '수율 94.8%',
    note: '전주 대비 +1.6%p, Particle 비중 증가',
  },
  {
    title: 'Top Risk',
    value: 'ETCH-03',
    note: '압력 알람 2회, 청소 로그 확인 필요',
  },
  {
    title: 'Next Action',
    value: '3건',
    note: '담당자/기한 지정 후 재확인',
  },
];

const failureCases = [
  {
    title: '숫자 틀림',
    bad: '전주 대비가 아니라 전월 대비로 계산됨',
    fix: '비교 기준을 프롬프트와 코드에 동시에 고정',
  },
  {
    title: '과한 확정',
    bad: '원인을 단정적으로 쓰고 확인 근거를 생략',
    fix: '가설과 확인 필요 항목을 분리해 서술',
  },
  {
    title: '근거 누락',
    bad: '요약은 길지만 어느 표에서 왔는지 알 수 없음',
    fix: '문장마다 출처 지표를 붙이는 규칙 추가',
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
          <h1>데이터 기반 주간/월간 보고서 자동 생성</h1>
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
        <section className="report-sample-section" style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', marginBottom: '3rem', border: '1px solid #e2e8f0' }}>
          <span className="section-label" style={{ display: 'inline-block', background: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>00. 현업 엔지니어의 실제 보고서</span>
          <h2 style={{ marginTop: 0, color: '#0f172a' }}>"우리는 데이터로 말하고, 보고서로 설득합니다"</h2>
          <p className="section-intro" style={{ marginBottom: '2rem' }}>
            반도체/디스플레이 공정 엔지니어의 핵심 업무 중 하나는 <strong>데이터를 분석해 원인을 찾고, 이를 보고서로 작성하여 유관 부서를 설득하는 것</strong>입니다. AI가 어떻게 이 과정을 도울 수 있는지 알아보기 전에, 실제 현업에서 작성되는 주간/월간 보고서 샘플을 확인해 봅시다.
          </p>
          
          <div className="report-cards-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* 주간 보고서 */}
            <article className="report-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderTop: '4px solid #ef4444' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 8px #ef4444' }}></span>
                  주간 이상 진단 (Weekly Alert)
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>2026.05 3주차</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', color: '#1e293b' }}>[긴급] Photo 공정 수율 저하 원인 분석</h3>
              
              {/* Data Dashboard */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, background: '#fef2f2', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid #ef4444' }}>
                  <div style={{ fontSize: '0.8rem', color: '#991b1b', fontWeight: 'bold', marginBottom: '0.25rem' }}>주간 수율</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#b91c1c' }}>93.8% <span style={{ fontSize: '0.8rem', color: '#ef4444', marginLeft: '4px' }}>▼ 1.2%p</span></div>
                </div>
                <div style={{ flex: 1, background: '#fffbeb', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid #f59e0b' }}>
                  <div style={{ fontSize: '0.8rem', color: '#92400e', fontWeight: 'bold', marginBottom: '0.25rem' }}>Particle 불량</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '900', color: '#b45309' }}>342건 <span style={{ fontSize: '0.8rem', color: '#ef4444', marginLeft: '4px' }}>▲ 44%</span></div>
                </div>
              </div>

              {/* Data Visualization */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 'bold' }}>발생 설비 분포</span>
                  <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 'bold' }}>T-04 설비 집중 발생!</span>
                </div>
                <div style={{ display: 'flex', height: '1.5rem', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '65%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>T-04 (65%)</div>
                  <div style={{ width: '20%', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>T-02</div>
                  <div style={{ width: '15%', background: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 'bold' }}>기타</div>
                </div>
              </div>

              {/* Trend Chart */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '0.5rem', fontWeight: 'bold' }}>일별 Particle 불량 발생 추이</div>
                <div style={{ height: '80px', width: '100%', background: '#f8fafc', borderRadius: '6px', padding: '0.5rem 0.5rem 1.5rem 0.5rem', position: 'relative', border: '1px solid #f1f5f9' }}>
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    <path d="M 0,35 L 20,32 L 40,30 L 60,34 L 80,10 L 100,5" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="80" cy="10" r="2" fill="#ef4444" />
                    <circle cx="100" cy="5" r="2" fill="#ef4444" />
                    <path d="M 0,35 L 20,32 L 40,30 L 60,34 L 80,10 L 100,5 L 100,40 L 0,40 Z" fill="rgba(239, 68, 68, 0.1)" />
                  </svg>
                  <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', fontSize: '0.7rem', color: '#ef4444', fontWeight: 'bold', background: 'white', padding: '2px 4px', borderRadius: '4px', border: '1px solid #fca5a5' }}>야간조 급증</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#64748b', position: 'absolute', bottom: '4px', left: '0.5rem', right: '0.5rem' }}>
                    <span>월</span><span>화</span><span>수</span><span>목(주간)</span><span style={{color:'#ef4444', fontWeight:'bold'}}>목(야간)</span><span style={{color:'#ef4444', fontWeight:'bold'}}>금</span>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '6px', fontSize: '0.9rem', color: '#334155', border: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '0.5rem' }}><strong>⚡ 즉각 조치:</strong> T-04 설비 가동 중단 후 이송 롤러 교체 (진행중)</div>
                <div><strong>💡 향후 계획:</strong> 주말 PM 시 전체 Track 설비 롤러 마모도 일제 점검</div>
              </div>
            </article>

            {/* 월간 보고서 */}
            <article className="report-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderTop: '4px solid #3b82f6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span>
                  월간 종합 리뷰 (Monthly Review)
                </span>
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>2026년 4월 종합</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', color: '#1e293b' }}>[월간] 공정 수율 현황 및 고질 불량 모니터링</h3>
              
              {/* Data Dashboard */}
              <div style={{ marginBottom: '1.25rem', background: '#f0fdf4', padding: '0.85rem', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#166534' }}>월간 평균 수율 (목표 95.0%)</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '900', color: '#15803d' }}>95.4% <span style={{ fontSize: '0.75rem', background: '#22c55e', color: 'white', padding: '2px 6px', borderRadius: '99px', verticalAlign: 'middle', marginLeft: '4px' }}>초과 달성</span></span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#dcfce7', borderRadius: '99px', overflow: 'hidden' }}>
                  <div style={{ width: '95.4%', height: '100%', background: '#16a34a', borderRadius: '99px' }}></div>
                </div>
              </div>

              {/* Yield Trend Chart */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '0.5rem', fontWeight: 'bold' }}>주차별 수율 추이 (Target: 95.0%)</div>
                <div style={{ height: '80px', width: '100%', background: '#f8fafc', borderRadius: '6px', padding: '0.5rem 0.5rem 1.5rem 0.5rem', position: 'relative', border: '1px solid #f1f5f9' }}>
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    {/* Target Line */}
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />
                    <text x="0" y="22" fontSize="5" fill="#64748b">95.0%</text>
                    {/* Yield Line */}
                    <path d="M 0,30 L 33,22 L 66,15 L 100,10" fill="none" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="0" cy="30" r="2" fill="#10b981" />
                    <circle cx="33" cy="22" r="2" fill="#10b981" />
                    <circle cx="66" cy="15" r="2" fill="#10b981" />
                    <circle cx="100" cy="10" r="2" fill="#10b981" />
                    <path d="M 0,30 L 33,22 L 66,15 L 100,10 L 100,40 L 0,40 Z" fill="rgba(16, 185, 129, 0.1)" />
                  </svg>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#64748b', position: 'absolute', bottom: '4px', left: '0.5rem', right: '0.5rem' }}>
                    <span>1주차</span><span>2주차</span><span>3주차</span><span>4주차</span>
                  </div>
                </div>
              </div>

              {/* Pareto Mini Chart */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '0.75rem', fontWeight: 'bold' }}>Pareto Top 3 불량 점유율 변화</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '60px', fontSize: '0.8rem', color: '#475569', fontWeight: 'bold' }}>Particle</span>
                    <div style={{ flex: 1, height: '16px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '32%', height: '100%', background: '#3b82f6', display: 'flex', alignItems: 'center', paddingLeft: '4px', fontSize: '0.65rem', color: 'white', fontWeight: 'bold' }}>32%</div>
                    </div>
                    <span style={{ width: '45px', fontSize: '0.8rem', color: '#10b981', textAlign: 'right', fontWeight: 'bold' }}>▼ 5%</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '60px', fontSize: '0.8rem', color: '#475569', fontWeight: 'bold' }}>Scratch</span>
                    <div style={{ flex: 1, height: '16px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '21%', height: '100%', background: '#94a3b8', display: 'flex', alignItems: 'center', paddingLeft: '4px', fontSize: '0.65rem', color: 'white', fontWeight: 'bold' }}>21%</div>
                    </div>
                    <span style={{ width: '45px', fontSize: '0.8rem', color: '#94a3b8', textAlign: 'right' }}>-</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '60px', fontSize: '0.8rem', color: '#b91c1c', fontWeight: 'bold' }}>CD Drift</span>
                    <div style={{ flex: 1, height: '16px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '18%', height: '100%', background: '#f59e0b', display: 'flex', alignItems: 'center', paddingLeft: '4px', fontSize: '0.65rem', color: 'white', fontWeight: 'bold' }}>18%</div>
                    </div>
                    <span style={{ width: '45px', fontSize: '0.8rem', color: '#ef4444', textAlign: 'right', fontWeight: 'bold' }}>▲ 위험</span>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '0.85rem', borderRadius: '6px', fontSize: '0.9rem', color: '#334155', border: '1px solid #e2e8f0' }}>
                <strong>🎯 Action Matrix 결론:</strong> 영향도는 높으나 조치 난이도가 낮은 'Scratch' 개선을 위해 익월 카세트 전면 교체 우선 진행
              </div>
            </article>
          </div>

          <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '8px', marginTop: '1.5rem', borderLeft: '4px solid #2563eb', fontSize: '0.95rem', color: '#1e3a8a', lineHeight: '1.5' }}>
            <strong>💡 강사의 한마디:</strong> "우리가 지금부터 파이썬과 AI로 만들 결과물이 바로 <strong>이런 보고서에 들어갈 핵심 차트와 데이터 근거들</strong>입니다. 차트를 그리는 것에 그치지 않고, 조치 계획을 세우는 것까지가 엔지니어의 진짜 역할입니다."
          </div>
        </section>
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
          <span className="section-label">05. 실전 데이터 샘플</span>
          <h2>보고서 자동화는 실제로 어떤 파일을 먹고 어떤 문장을 뱉는지부터 보여줘야 합니다</h2>
          <p className="section-intro">
            수강생이 가장 먼저 이해해야 할 것은 입력 파일입니다. 세 개의 CSV만 있어도 주간 보고서의 80%는 자동화할 수 있습니다.
          </p>
          <div className="sample-grid">
            <div className="data-spec-panel">
              <div className="table-head">
                <strong>입력 파일</strong>
                <strong>용도</strong>
                <strong>주요 컬럼</strong>
                <strong>샘플 한 줄</strong>
              </div>
              {sampleDatasets.map((row) => (
                <div className="table-row" key={row.file}>
                  <strong>{row.file}</strong>
                  <span>{row.use}</span>
                  <span>{row.columns}</span>
                  <span>{row.example}</span>
                </div>
              ))}
            </div>
            <div className="sample-note">
              <strong>이 표가 중요한 이유</strong>
              <p>
                자동 보고서는 데이터의 모양을 알아야 안정적으로 생성됩니다. 파일명, 컬럼명, 예시 한 줄을 먼저 보여주면 AI가 엉뚱한 기준으로 계산하는 일을 줄일 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">06. Before / After</span>
          <h2>자동화의 가치는 기능 수가 아니라 반복 업무가 얼마나 줄었는지로 보여주는 편이 낫습니다</h2>
          <p className="section-intro">
            수동 보고와 자동 보고를 같은 화면에서 비교하면 왜 10강이 필요한지 바로 보입니다.
          </p>
          <div className="before-after-grid">
            {beforeAfter.map((panel) => (
              <article className={`compare-card ${panel.kind}`} key={panel.kind}>
                <span>{panel.title}</span>
                <ul>
                  {panel.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="benefit-strip">
            <div>
              <strong>시간</strong>
              <span>480분 → 15분</span>
            </div>
            <div>
              <strong>실수</strong>
              <span>복붙 오류, 버전 혼선 감소</span>
            </div>
            <div>
              <strong>반복성</strong>
              <span>주간/월간 보고서 재사용 가능</span>
            </div>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">07. 완성 보고서 1페이지</span>
          <h2>보고서 결과물이 어떤 모습인지 먼저 보여주면 수강생은 실습의 끝을 더 정확히 이해합니다</h2>
          <p className="section-intro">
            아래 목업은 실제 회의에서 1페이지로 배포할 수 있는 구성입니다. 상단 KPI, 중앙 근거, 하단 액션으로 읽히는 흐름을 유지합니다.
          </p>
          <div className="report-mock">
            <div className="report-mock-header">
              <div>
                <span className="report-chip">Weekly Report</span>
                <h3>5월 3주차 공정 운영 요약</h3>
              </div>
              <div className="report-status">Auto-generated</div>
            </div>
            <div className="report-mock-grid">
              {reportMock.map((item) => (
                <article className="report-mock-card" key={item.title}>
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
            <div className="report-evidence">
              <div className="report-evidence-chart">
                <strong>Evidence</strong>
                <p>수율 추이, 파레토, 알람 로그가 한 장에 묶여 있어 회의 중 근거 추적이 쉽습니다.</p>
              </div>
              <div className="report-evidence-actions">
                <strong>Action Items</strong>
                <ol>
                  <li>ETCH-03 압력 로그 추가 점검</li>
                  <li>Particle 불량 lot 재분류</li>
                  <li>다음 주 보고서 비교 기준 고정</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">08. 실패 사례와 검증</span>
          <h2>실전에서는 잘 만든 초안보다 잘못된 초안을 빨리 찾아내는 능력이 더 중요합니다</h2>
          <p className="section-intro">
            자동 보고는 편하지만, 검증 기준이 없으면 오류도 빠르게 퍼집니다. 아래는 가장 흔한 실패 유형입니다.
          </p>
          <div className="failure-grid">
            {failureCases.map((item) => (
              <article className="failure-card" key={item.title}>
                <strong>{item.title}</strong>
                <p className="failure-bad">Bad: {item.bad}</p>
                <p className="failure-fix">Fix: {item.fix}</p>
              </article>
            ))}
          </div>
          <div className="failure-callout">
            <strong>검증 규칙</strong>
            <p>
              계산 기준, 비교 기간, 단위, 담당자, 출처를 보고서 초안 생성 직전에 다시 명시합니다. 이 규칙 하나만 제대로 넣어도 실무 품질이 크게 올라갑니다.
            </p>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">09. 실습: AI 작업지시서 만들기</span>
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
          <span className="section-label">10. 검증 기준과 마무리</span>
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
