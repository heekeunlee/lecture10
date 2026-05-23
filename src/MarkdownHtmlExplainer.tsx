import React from 'react';

export default function MarkdownHtmlExplainer() {
  return (
    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.5rem', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Markdown과 HTML: 상황에 맞는 두 가지 보고서 무기</h3>
        <p style={{ color: '#64748b', fontSize: '1rem', margin: 0 }}>
          엔지니어는 신속한 초안 공유를 위한 Markdown과, 격식 있는 프레젠테이션을 위한 HTML을 모두 자유자재로 생성할 수 있어야 합니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Markdown Section */}
        <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ background: '#334155', color: 'white', padding: '0.5rem', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}>M↓</div>
            <h4 style={{ fontSize: '1.3rem', color: '#0f172a', margin: 0 }}>마크다운 (Markdown) 이란?</h4>
          </div>
          <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            텍스트에 <code>#</code>, <code>*</code>, <code>-</code> 등의 간단한 기호를 더해 글의 구조(제목, 목록, 표)를 잡아주는 경량 마크업 언어입니다. 서식을 꾸미는 데 시간을 낭비하지 않고 <strong>내용과 로직에만 집중</strong>할 수 있어, 사내 메신저, 슬랙, 깃허브, 지라(Jira) 등에서의 빠른 공유 및 <strong>리뷰용 초안(Draft)</strong>으로 완벽합니다.
          </p>

          <div style={{ background: '#1e293b', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', overflowX: 'auto', color: '#e2e8f0' }}>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.5rem', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>📄 마크다운 보고서 소스코드 예시</div>
            <pre style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', fontFamily: 'monospace' }}>
<span style={{ color: '#60a5fa' }}># 주간 생산성 이슈 보고</span>{'\n\n'}
<span style={{ color: '#60a5fa' }}>## 1. 핵심 요약 (Executive Summary)</span>{'\n'}
- 금주 목표 생산량 <span style={{ color: '#fbbf24' }}>**95% 달성**</span> (장비 A 다운타임 영향){'\n'}
- OOC 발생: 총 <span style={{ color: '#fbbf24' }}>**3건**</span> (Etch 공정 중심){'\n\n'}
<span style={{ color: '#60a5fa' }}>## 2. Action Items</span>{'\n'}
1. [ ] Etch-02 설비 RF 매칭 네트워크 점검 (담당: 김엔지니어){'\n'}
2. [x] 지난주 보류된 Lot 3건 폐기 승인 상신
            </pre>
          </div>

          <div style={{ background: 'white', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e2e8f0', borderLeft: '4px solid #334155' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569', marginBottom: '0.5rem' }}>🤖 Markdown 생성 프롬프트 예시</div>
            <code style={{ fontSize: '0.9rem', color: '#0f172a', whiteSpace: 'pre-wrap' }}>
              "위의 불량 분석 데이터를 기반으로, 슬랙(Slack)으로 팀원들에게 바로 공유할 수 있는 간결한 마크다운(Markdown) 형식의 보고서를 작성해줘. 제목은 '#' 1개로, 핵심 섹션은 '##'로 구분하고, 가장 치명적인 수치는 반드시 '**' 기호로 굵게 강조해줘."
            </code>
          </div>
        </div>

        {/* HTML Section */}
        <div style={{ background: '#fff1f2', borderRadius: '12px', padding: '2rem', border: '1px solid #fecaca', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ background: '#e11d48', color: 'white', padding: '0.5rem', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}>&lt;/&gt;</div>
            <h4 style={{ fontSize: '1.3rem', color: '#991b1b', margin: 0 }}>HTML (HyperText Markup) 이란?</h4>
          </div>
          <p style={{ color: '#7f1d1d', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            웹페이지를 시각적으로 아름답고 체계적으로 구성하는 표준 웹 언어입니다. CSS 스타일링을 통해 색상, 레이아웃, 대시보드 형태를 자유자재로 꾸밀 수 있어, <strong>경영진 보고, 월간 리뷰 회의, 타 부서와의 공식적인 산출물 공유(Sharing)</strong> 시 높은 신뢰도와 프로페셔널함을 제공합니다.
          </p>

          <div style={{ background: 'white', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid #fca5a5' }}>
            <div style={{ fontSize: '0.8rem', color: '#ef4444', marginBottom: '0.5rem', borderBottom: '1px solid #fecaca', paddingBottom: '0.5rem' }}>🌐 HTML 보고서 렌더링 예시 (대시보드형)</div>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <h2 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0', color: '#0f172a', borderBottom: '2px solid #e11d48', paddingBottom: '0.25rem' }}>주간 생산성 이슈 보고</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1, background: '#fff', padding: '1rem', borderRadius: '6px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>목표 달성률</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#e11d48' }}>95.0% ▼</div>
                </div>
                <div style={{ flex: 1, background: '#fff', padding: '1rem', borderRadius: '6px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>OOC 발생 건수</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a' }}>3 건</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: '8px', padding: '1.5rem', border: '1px solid #fecaca', borderLeft: '4px solid #e11d48' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#be123c', marginBottom: '0.5rem' }}>🤖 HTML 생성 프롬프트 예시</div>
            <code style={{ fontSize: '0.9rem', color: '#7f1d1d', whiteSpace: 'pre-wrap' }}>
              "작성된 초안을 바탕으로, 경영진 주간 회의 화면에 바로 띄울 수 있도록 세련된 인라인 CSS 스타일이 적용된 1페이지 HTML 보고서를 생성해줘. 데이터 비교가 쉽도록 'flexbox' 레이아웃을 사용하고, 미달성된 지표는 배경색을 '#fff1f2'로 눈에 띄게 표시해줘."
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
