import React from 'react';

export default function BackgroundReports() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
      
      {/* 1. Daily Report */}
      <article style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #64748b', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>매일 아침 (Daily)</span>
          <h3 style={{ margin: '0.5rem 0', color: '#0f172a', fontSize: '1.5rem' }}>일일 교대/현황 보고</h3>
          <p style={{ fontSize: '1rem', color: '#334155', lineHeight: '1.6', margin: 0 }}>
            전일 수율, 생산량, 주요 설비 알람을 다음 근무자에게 인수인계하는 가장 빈번하고 간결한 보고입니다. 데이터의 정확성과 전달의 신속성이 생명입니다.
          </p>
        </div>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ borderBottom: '2px solid #334155', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>[Daily] 일일 생산 현황 및 교대 일지</h4>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>작성일자: 2026.05.24 | 작성자: A조 김엔지니어 ➔ 수신: B조</div>
            </div>
            <span style={{ background: '#f1f5f9', padding: '4px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>문서번호: D-20260524</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>일일 목표 달성률</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>101.2% <span style={{fontSize:'0.9rem'}}>▲</span></div>
            </div>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>총 생산량</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0f172a' }}>1,215장</div>
            </div>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>종합 수율</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>98.2%</div>
            </div>
            <div style={{ background: '#fff1f2', padding: '1rem', borderRadius: '8px', border: '1px solid #fecaca' }}>
              <div style={{ fontSize: '0.8rem', color: '#ef4444', marginBottom: '0.5rem' }}>설비 다운타임</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444' }}>45분</div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h5 style={{ fontSize: '1rem', color: '#1e293b', marginBottom: '1rem' }}>시간대별 생산 트렌드</h5>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px', padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
              {[80, 95, 110, 60, 105, 115].map((val, idx) => (
                <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{val}</div>
                  <div style={{ width: '60%', background: val < 70 ? '#ef4444' : '#3b82f6', height: `${(val/120)*100}px`, borderRadius: '4px 4px 0 0', transition: 'height 0.3s' }}></div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{idx*4}h</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#f1f5f9', padding: '1.5rem', borderRadius: '8px', fontSize: '0.95rem', color: '#334155' }}>
            <h5 style={{ margin: '0 0 1rem 0', color: '#0f172a' }}>📝 B조 특이 인계사항</h5>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>T-04 설비:</strong> 오전 10시경 진공 펌프 알람 발생하여 45분간 다운 (현재 조치 완료하여 정상 가동 중)</li>
              <li><strong>오후 일정:</strong> 14:00에 T-02 설비 가스 밸브 예방정비(PM) 예정되어 있으니 스케줄 조정 바람.</li>
              <li><strong>자재:</strong> 감광액(PR) 재고 2통 남아있으므로 야간에 추가 출고 필요.</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#e2e8f0', borderRadius: '8px', borderLeft: '4px solid #475569' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569', marginBottom: '0.5rem' }}>🤖 프롬프트 활용 예시</div>
          <code style={{ fontSize: '0.9rem', color: '#0f172a', whiteSpace: 'pre-wrap' }}>
            "어제 야간조의 시간대별 생산량 데이터와 알람 발생 로그를 분석해서, 오늘 주간조에게 인계할 '일일 교대 현황 보고서'를 작성해줘. 종합 수율과 설비 다운타임을 표 형식으로 요약하고, 가장 주의해야 할 특이사항 3가지를 불릿 포인트로 강조해줘."
          </code>
        </div>
      </article>

      {/* 2. Trouble Report */}
      <article style={{ background: '#fff1f2', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #ef4444', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#ef4444', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>사고 발생 시 (Emergency)</span>
          <h3 style={{ margin: '0.5rem 0', color: '#991b1b', fontSize: '1.5rem' }}>이상 발생 보고 (Trouble Report)</h3>
          <p style={{ fontSize: '1rem', color: '#7f1d1d', lineHeight: '1.6', margin: 0 }}>
            수율 급락, 대형 설비 고장 등 문제 발생 시 피해 확산을 막기 위해 2~4시간 내에 1차 조치와 현상을 긴급 전파하는 <strong>응급 수술 기록지</strong> 역할을 합니다.
          </p>
        </div>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #fecaca' }}>
          <div style={{ borderBottom: '2px solid #ef4444', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#b91c1c' }}>[긴급] Etch 공정 T-04 설비 플라즈마 이상 발생</h4>
              <div style={{ fontSize: '0.85rem', color: '#ef4444', marginTop: '0.5rem', fontWeight: 'bold' }}>발생일시: 2026.05.23 14:30 | 심각도: High</div>
            </div>
            <span style={{ background: '#ef4444', color: 'white', padding: '6px 16px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold', animation: 'pulse 2s infinite' }}>Interlock 발동됨</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '8px', border: '1px solid #fca5a5' }}>
                <div style={{ fontSize: '0.8rem', color: '#991b1b', fontWeight: 'bold', marginBottom: '0.25rem' }}>피해 규모 (예상)</div>
                <div style={{ fontSize: '1.25rem', color: '#b91c1c', fontWeight: '900' }}>2 Lot (50장) 스크랩 위기</div>
                <div style={{ fontSize: '0.85rem', color: '#7f1d1d', marginTop: '0.25rem' }}>예상 재무 손실: ₩ 4,500만</div>
              </div>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.25rem' }}>원인 추정</div>
                <div style={{ fontSize: '0.95rem', color: '#0f172a' }}>RF Generator 통신 에러로 인한 순간적인 전압(Voltage) 강하 현상</div>
              </div>
            </div>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '1rem' }}>설비 센서 데이터 추이 (RF Voltage)</div>
              {/* CSS 기반 꺾은선 그래프 (Step Line) 시각화 */}
              <div style={{ height: '120px', display: 'flex', alignItems: 'flex-end', borderBottom: '2px solid #cbd5e1', borderLeft: '2px solid #cbd5e1', padding: '0 0 10px 10px', gap: '4px' }}>
                {[100, 100, 100, 98, 100, 15, 12, 18, 100, 100, 100].map((val, idx) => (
                  <div key={idx} style={{ flex: 1, height: `${val}%`, background: val < 50 ? '#ef4444' : '#94a3b8', borderRadius: '2px', position: 'relative' }}>
                    {val < 50 && idx === 6 && <span style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#ef4444', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>Drop!</span>}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginTop: '8px' }}>
                <span>14:00</span>
                <span>14:30 (사고발생)</span>
                <span>15:00</span>
              </div>
            </div>
          </div>

          <div style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '8px', fontSize: '0.95rem', color: '#991b1b', border: '1px solid #fca5a5' }}>
            <h5 style={{ margin: '0 0 1rem 0', color: '#7f1d1d' }}>⚡ 1차 조치 내역 및 향후 계획</h5>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>즉각 조치:</strong> T-04 설비 Interlock 발동 확인 및 물리적 가동 중단(Tag-out). 해당 Lot 보류 조치.</li>
              <li><strong>전파 내역:</strong> 설비기술팀, 품질보증팀, 생산관리팀 상황 긴급 문자 전파 완료.</li>
              <li><strong>향후 계획:</strong> 금일 16:00 부로 설비기술팀과 합동으로 RF Generator 분해 점검 예정.</li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#fef2f2', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '0.5rem' }}>🤖 프롬프트 활용 예시</div>
          <code style={{ fontSize: '0.9rem', color: '#7f1d1d', whiteSpace: 'pre-wrap' }}>
            "방금 Etch 공정 T-04 설비에서 RF Voltage 강하로 인한 플라즈마 이상이 발생했어. 피해 수량은 2 Lot이고 현재 설비는 가동 중단 상태야. 유관부서에 5분 내로 배포할 긴급 Trouble Report 초안을 '사고 개요', '피해 규모', '1차 조치', '향후 계획' 4가지 단락으로 명확하게 작성해줘."
          </code>
        </div>
      </article>

      {/* 3. 8D Report */}
      <article style={{ background: '#f0fdfa', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #0d9488', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#0d9488', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>사고 수습 후 (Post-mortem)</span>
          <h3 style={{ margin: '0.5rem 0', color: '#115e59', fontSize: '1.5rem' }}>개선 대책 보고 (8D Report)</h3>
          <p style={{ fontSize: '1rem', color: '#134e4a', lineHeight: '1.6', margin: 0 }}>
            단순한 임시방편이 아닌 근본 원인(Root Cause)을 깊이 있게 규명하고, 시스템적인 재발 방지 대책을 8단계(8 Disciplines)로 수립하는 가장 체계적이고 무거운 심층 보고서입니다.
          </p>
        </div>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #ccfbf1' }}>
          <div style={{ borderBottom: '2px solid #0d9488', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#0f766e' }}>[8D Report] Photo 공정 Edge 부분 초점 불량 근본원인 개선</h4>
              <div style={{ fontSize: '0.85rem', color: '#0d9488', marginTop: '0.5rem', fontWeight: 'bold' }}>TFT: Photo 품질개선반 | 기간: 26.04.10 ~ 26.05.20</div>
            </div>
            <span style={{ background: '#10b981', color: 'white', padding: '6px 16px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold' }}>Status: CLOSED (승인완료)</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h5 style={{ margin: '0 0 0.5rem 0', color: '#0f172a' }}>8 Disciplines 전개 과정</h5>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#f8fafc', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid #94a3b8' }}>
                <strong style={{ color: '#475569', minWidth: '45px' }}>D1~D3</strong>
                <div style={{ fontSize: '0.9rem', color: '#334155' }}><strong>현상 파악 및 임시 조치:</strong> 웨이퍼 엣지 흔들림 현상 확인. 해당 호기 가동 즉각 중단 및 재고 전수 검사 진행.</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#fef2f2', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid #ef4444' }}>
                <strong style={{ color: '#ef4444', minWidth: '45px' }}>D4</strong>
                <div style={{ fontSize: '0.9rem', color: '#991b1b' }}><strong>근본 원인 (Root Cause):</strong> 5-Why 분석 결과, 설비 내 척(Chuck) 하단 오링(O-ring) 마모로 인한 미세 진공 누설 확인.</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#f0fdfa', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid #10b981' }}>
                <strong style={{ color: '#10b981', minWidth: '45px' }}>D5~D6</strong>
                <div style={{ fontSize: '0.9rem', color: '#065f46' }}><strong>영구 대책 검증 및 실행:</strong> 기존 Viton 재질 오링을 내열성/내마모성이 뛰어난 Kalrez 재질로 전면 교체 적용.</div>
              </div>
            </div>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ fontSize: '1rem', color: '#0f766e', fontWeight: 'bold', marginBottom: '1.5rem' }}>영구 대책 전/후 불량률(ppm) 극적 개선 효과</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', width: '100%' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ height: '100px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '1rem' }}>
                    <div style={{ width: '60px', background: '#ef4444', height: '100%', borderRadius: '4px 4px 0 0' }}></div>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ef4444' }}>8,420 <span style={{fontSize:'0.8rem'}}>ppm</span></div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px', fontWeight: 'bold' }}>개선 전 (Before)</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '2rem', color: '#94a3b8' }}>➔</div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 'bold', background: '#d1fae5', padding: '2px 8px', borderRadius: '99px', marginTop: '4px' }}>-99.8%</div>
                </div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{ height: '100px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: '1rem' }}>
                    <div style={{ width: '60px', background: '#10b981', height: '5%', borderRadius: '4px 4px 0 0' }}></div>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#10b981' }}>12 <span style={{fontSize:'0.8rem'}}>ppm</span></div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px', fontWeight: 'bold' }}>개선 후 (After)</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', fontSize: '0.95rem', color: '#334155', border: '1px solid #e2e8f0' }}>
            <h5 style={{ margin: '0 0 0.5rem 0', color: '#0f172a' }}>🏁 D7~D8 (재발 방지 및 결론)</h5>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              전 호기 척 오링 교체 수평 전개 완료 및 PM(예방정비) 주기 표준서에 오링 교체 주기를 기존 6개월에서 4개월로 단축 반영함. 교체 후 3주간 양산 모니터링 결과 불량 재발 없음 확인 완료. 해당 이슈 클로즈 및 참여 인원 포상 상신함.
            </p>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#f0fdfa', borderRadius: '8px', borderLeft: '4px solid #0d9488' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0d9488', marginBottom: '0.5rem' }}>🤖 프롬프트 활용 예시</div>
          <code style={{ fontSize: '0.9rem', color: '#134e4a', whiteSpace: 'pre-wrap' }}>
            "지난달 발생한 Photo 공정 엣지 포커스 불량 건에 대해, 5-Why 기법을 적용하여 근본 원인을 '척 오링 마모로 인한 진공 누설'로 도출했어. 영구 대책으로 재질을 변경했고 불량률이 8400ppm에서 12ppm으로 감소했어. 이 전체 스토리를 8D Report 양식(D1~D8)에 맞추어 전문적이고 논리적으로 작성해줘."
          </code>
        </div>
      </article>

      {/* 4. ECN Report */}
      <article style={{ background: '#fffbeb', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #f59e0b', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#d97706', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>조건 변경 시 (A/B Test)</span>
          <h3 style={{ margin: '0.5rem 0', color: '#92400e', fontSize: '1.5rem' }}>조건 변경 보고 (ECN Report)</h3>
          <p style={{ fontSize: '1rem', color: '#78350f', lineHeight: '1.6', margin: 0 }}>
            레시피, 파츠, 화공약품 등을 변경할 때 스플릿 테스트(A/B Test)를 진행하여 통계적으로 품질에 악영향이 없음을 완벽하게 입증하고 양산 적용 승인을 받는 핵심 평가 보고서입니다.
          </p>
        </div>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #fef3c7' }}>
          <div style={{ borderBottom: '2px solid #f59e0b', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#b45309' }}>[ECN] 세정 공정(Cleaning) 케미컬 농도 변경 평가 승인 요청</h4>
              <div style={{ fontSize: '0.85rem', color: '#d97706', marginTop: '0.5rem', fontWeight: 'bold' }}>변경 구분: 레시피 (Recipe) | 위험도: Medium</div>
            </div>
            <span style={{ background: '#f59e0b', color: 'white', padding: '6px 16px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold' }}>승인 대기중 (Pending)</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h5 style={{ margin: '0 0 0.75rem 0', color: '#0f172a' }}>변경 개요 및 평가 방법</h5>
                <div style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem' }}><strong>변경 사유:</strong> 원가 절감(약품비 연 3억) 및 식각 데미지 완화</div>
                <div style={{ fontSize: '0.9rem', color: '#475569' }}><strong>평가 방법:</strong> 양산 3 Lot 대상 Split Test 진행</div>
                <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.9rem', color: '#475569' }}>
                  <li>그룹 A (Ref): 기존 농도 100%</li>
                  <li>그룹 B (New): 신규 농도 80%</li>
                </ul>
              </div>
              <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h5 style={{ margin: '0 0 0.75rem 0', color: '#0f172a' }}>최종 수율 (Yield) 비교</h5>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#64748b' }}>97.5%</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>기존 (Ref)</div>
                  </div>
                  <div style={{ color: '#d97706', fontSize: '1.5rem', fontWeight: 'bold' }}>vs</div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#d97706' }}>98.1%</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>신규 (New)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ background: '#fffbeb', padding: '1.5rem', borderRadius: '8px', border: '1px solid #fde68a', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1rem', color: '#92400e', fontWeight: 'bold', marginBottom: '1.5rem' }}>핵심 품질 인자: 공정 능력 지수 (Cpk) 비교</div>
              {/* CSS 기반 Box Plot/범위 막대 유사 시각화 */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 'bold' }}>기존 (100% 농도)</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#475569' }}>Cpk 1.12</span>
                  </div>
                  <div style={{ background: '#e2e8f0', height: '24px', borderRadius: '4px', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '20%', right: '40%', background: '#94a3b8', height: '100%', borderRadius: '4px' }}></div>
                    <div style={{ position: 'absolute', left: '35%', top: '-4px', bottom: '-4px', width: '4px', background: '#334155' }}></div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px', textAlign: 'center' }}>데이터 산포가 넓음 (품질 변동성 큼)</div>
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#d97706', fontWeight: 'bold' }}>신규 (80% 농도)</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#b45309' }}>Cpk 1.65</span>
                  </div>
                  <div style={{ background: '#fef3c7', height: '24px', borderRadius: '4px', position: 'relative', border: '1px solid #fde68a' }}>
                    <div style={{ position: 'absolute', left: '45%', right: '45%', background: '#f59e0b', height: '100%', borderRadius: '4px' }}></div>
                    <div style={{ position: 'absolute', left: '50%', top: '-4px', bottom: '-4px', width: '4px', background: '#92400e' }}></div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#d97706', marginTop: '4px', textAlign: 'center' }}>데이터 산포 대폭 감소 (품질 안정화)</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: '#fdf8f6', padding: '1.5rem', borderRadius: '8px', fontSize: '0.95rem', color: '#92400e', border: '1px solid #fcd34d' }}>
            <h5 style={{ margin: '0 0 0.5rem 0', color: '#78350f' }}>✅ 최종 결론 및 승인 요청</h5>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              신규 농도(80%) 적용 시, 수율은 동등 이상 수준(98.1%)을 보였으며, 핵심 품질 인자의 산포가 획기적으로 개선되어 Cpk가 1.12에서 1.65(매우 우수)로 상승하였습니다. 이에 본 ECN의 양산 적용 승인을 상신합니다.
            </p>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#fffbeb', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#d97706', marginBottom: '0.5rem' }}>🤖 프롬프트 활용 예시</div>
          <code style={{ fontSize: '0.9rem', color: '#78350f', whiteSpace: 'pre-wrap' }}>
            "세정 공정의 케미컬 농도를 100%에서 80%로 줄이는 스플릿 테스트를 진행했어. 기존 대비 수율은 소폭 상승했고, 공정 능력 지수(Cpk)는 1.12에서 1.65로 대폭 개선되었어. 이 두 가지 데이터를 바탕으로 부서장에게 보고할 'ECN(조건 변경) 승인 요청서'를 결론이 돋보이도록 작성해줘."
          </code>
        </div>
      </article>

      {/* 5. Cost Reduction Report */}
      <article style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #22c55e', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#16a34a', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>정기 평가 시 (Quarterly/Half)</span>
          <h3 style={{ margin: '0.5rem 0', color: '#166534', fontSize: '1.5rem' }}>원가 절감/성과 보고</h3>
          <p style={{ fontSize: '1rem', color: '#14532d', lineHeight: '1.6', margin: 0 }}>
            엔지니어의 공정 개선 노력이 회사의 이익에 기여했음을 증명하는 문서입니다. 설비 소모품 수명 연장이나 특수 가스 사용량 최적화를 통해 절감한 비용을 객관적으로 어필합니다.
          </p>
        </div>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #dcfce7' }}>
          <div style={{ borderBottom: '2px solid #22c55e', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#15803d' }}>[Cost] 2026 상반기 CVD 공정 특수 가스 사용량 최적화 성과</h4>
              <div style={{ fontSize: '0.85rem', color: '#16a34a', marginTop: '0.5rem', fontWeight: 'bold' }}>프로젝트 리더: 이엔지니어 | 평가 기간: 26.01 ~ 26.06</div>
            </div>
            <span style={{ background: '#22c55e', color: 'white', padding: '6px 16px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold' }}>재무팀 검증 완료 🎖️</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>핵심 절감 항목</div>
                <div style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '1.5rem' }}>SiH4 가스 Flow <span style={{color: '#ef4444'}}>-15%</span> 감축</div>
                
                <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>연간 누적 절감액 (상반기)</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#15803d', lineHeight: '1' }}>
                  ₩ 1.5억
                </div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#16a34a', fontWeight: 'bold' }}>상반기 목표(1.0억) 대비 150% 달성</div>
              </div>
            </div>
            
            <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: '1rem', color: '#166534', fontWeight: 'bold', marginBottom: '1.5rem' }}>월별 누적 원가 절감액 추이 (단위: 백만 원)</div>
              {/* CSS 기반 누적 바 차트 (Waterfall 유사) */}
              <div style={{ height: '160px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 1rem', borderBottom: '2px solid #86efac' }}>
                {[
                  { month: '1월', val: 15 },
                  { month: '2월', val: 32 },
                  { month: '3월', val: 58 },
                  { month: '4월', val: 85 },
                  { month: '5월', val: 115 },
                  { month: '6월', val: 150 }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '12%' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#15803d' }}>{item.val}</div>
                    <div style={{ width: '100%', background: '#4ade80', height: `${(item.val/160)*100}px`, borderRadius: '4px 4px 0 0', position: 'relative' }}>
                      {idx === 5 && <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', background: '#166534', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>초과 달성!</div>}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#166534' }}>{item.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', fontSize: '0.95rem', color: '#334155', border: '1px solid #e2e8f0' }}>
            <h5 style={{ margin: '0 0 0.5rem 0', color: '#0f172a' }}>📈 종합 성과 요약 및 전개 계획</h5>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              공정 레시피 최적화를 통해 박막(Film) 두께 균일도를 유지하면서도 고가의 SiH4 가스 소모량을 15% 감축하였습니다. 이에 따라 상반기에만 1.5억 원의 비용을 절감하여 목표를 조기 초과 달성하였으며, 하반기에는 타 라인 전체로 확대 전개(Copy Exact)하여 연말까지 총 3.5억 원의 원가 절감이 기대됩니다.
            </p>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.5rem' }}>🤖 프롬프트 활용 예시</div>
          <code style={{ fontSize: '0.9rem', color: '#14532d', whiteSpace: 'pre-wrap' }}>
            "CVD 공정의 SiH4 가스 사용량을 15% 감축한 프로젝트의 상반기 성과 보고서를 작성해줘. 품질 저하 없이 누적 절감액 1.5억 원을 달성했다는 점을 강조하고, 경영진과 재무팀이 이해하기 쉽게 비즈니스적인 임팩트(연말 3.5억 절감 기대효과) 중심으로 요약해줘."
          </code>
        </div>
      </article>

      {/* 6. FA Report */}
      <article style={{ background: '#f5f3ff', padding: '2rem', borderRadius: '12px', borderLeft: '6px solid #8b5cf6', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#8b5cf6', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>원인 규명 시 (Analysis)</span>
          <h3 style={{ margin: '0.5rem 0', color: '#4c1d95', fontSize: '1.5rem' }}>불량 분석 보고 (FA Report)</h3>
          <p style={{ fontSize: '1rem', color: '#5b21b6', lineHeight: '1.6', margin: 0 }}>
            새로운 미지의 불량이 발생했을 때, SEM(전자현미경), EDS(성분분석) 등 첨단 정밀 분석 장비를 총동원하여 물질적, 화학적, 구조적 결함 메커니즘을 과학적으로 밝혀내는 보고서입니다.
          </p>
        </div>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #ede9fe' }}>
          <div style={{ borderBottom: '2px solid #8b5cf6', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#6d28d9' }}>[FA Report] 신규 Particle(이물질) 성분 및 발생 메커니즘 분석</h4>
              <div style={{ fontSize: '0.85rem', color: '#8b5cf6', marginTop: '0.5rem', fontWeight: 'bold' }}>분석 장비: SEM, EDS, FIB | 의뢰부서: 제조기술팀</div>
            </div>
            <span style={{ background: '#8b5cf6', color: 'white', padding: '6px 16px', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold' }}>분석 완료 (Completed)</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h5 style={{ margin: '0 0 1rem 0', color: '#0f172a' }}>기본 분석 정보</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: '#64748b' }}>이물질 크기</span>
                  <strong style={{ color: '#0f172a' }}>약 2.5 µm</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ color: '#64748b' }}>SEM 형상</span>
                  <strong style={{ color: '#0f172a' }}>비정형 불규칙 조각</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <span style={{ color: '#64748b' }}>주요 검출 원소</span>
                  <strong style={{ color: '#7c3aed' }}>F (34%), C (66%)</strong>
                </div>
              </div>
            </div>
            
            <div style={{ background: '#f5f3ff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ddd6fe' }}>
              <div style={{ fontSize: '1rem', color: '#5b21b6', fontWeight: 'bold', marginBottom: '1.5rem' }}>EDS 스펙트럼 (에너지 분산형 X선 분광법) 결과</div>
              {/* 깨지지 않는 안정적인 비율의 SVG 차트 */}
              <div style={{ width: '100%', background: 'white', borderRadius: '4px', padding: '1rem', border: '1px solid #ede9fe' }}>
                <svg viewBox="0 0 400 120" style={{ width: '100%', height: 'auto', display: 'block' }}>
                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="110" x2="400" y2="110" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Spectrum Path */}
                  <path d="M 0,110 L 50,110 L 60,30 L 70,110 L 140,110 L 150,80 L 160,110 L 400,110" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinejoin="round" />
                  
                  {/* Labels */}
                  <text x="60" y="20" fontSize="14" fill="#6d28d9" fontWeight="bold" textAnchor="middle">F (불소)</text>
                  <text x="150" y="70" fontSize="12" fill="#64748b" textAnchor="middle">C (탄소)</text>
                  
                  {/* Highlight box */}
                  <rect x="30" y="0" width="60" height="110" fill="#8b5cf6" opacity="0.1" rx="4" />
                </svg>
              </div>
            </div>
          </div>

          <div style={{ background: '#fdfaee', padding: '1.5rem', borderRadius: '8px', fontSize: '0.95rem', color: '#854d0e', border: '1px solid #fef08a' }}>
            <h5 style={{ margin: '0 0 0.5rem 0', color: '#713f12' }}>🔬 결론 및 메커니즘 확진</h5>
            <p style={{ margin: 0, lineHeight: '1.6' }}>
              분석 의뢰된 이물질에 대해 EDS 성분 분석을 진행한 결과, 정상 공정 가스에서는 검출될 수 없는 다량의 <strong>불소(Fluorine) 화합물 피크</strong>가 비정상적으로 치솟은 것을 확인했습니다. 탄소(C)가 함께 검출된 점을 미루어 볼 때, 챔버 내부의 불소계 플라즈마에 의해 상단 <strong>Viton 재질 O-ring이 화학적으로 식각(부식)</strong>되어 웨이퍼 위로 떨어져 내린 것으로 최종 확진합니다.
            </p>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', padding: '1.2rem', background: '#f5f3ff', borderRadius: '8px', borderLeft: '4px solid #8b5cf6' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#7c3aed', marginBottom: '0.5rem' }}>🤖 프롬프트 활용 예시</div>
          <code style={{ fontSize: '0.9rem', color: '#4c1d95', whiteSpace: 'pre-wrap' }}>
            "웨이퍼에서 발견된 새로운 파티클 불량에 대해 불량분석(FA)을 진행했어. EDS 장비로 찍어보니 탄소(C) 베이스에 불소(F)가 34%나 검출되었어. 이를 근거로 챔버 내 O-ring이 플라즈마에 부식되어 떨어졌다는 논리적인 메커니즘을 제시하는 'FA 분석 결과 보고서' 초안을 작성해줘."
          </code>
        </div>
      </article>
      
    </div>
  );
}
