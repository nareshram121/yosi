'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { DeductionPuzzleConfig, SolveState } from '@/types/puzzle';
import type { EngineHandle } from '@/components/puzzle/PuzzleShell';

interface Props {
  config: DeductionPuzzleConfig;
  onSolve?: (state: SolveState) => void;
  onWrongGuess?: (accusation: Record<string, string>) => void;
}

const DEDUCTION_SHELL = `
<style>
  .de-wrap { font-family: var(--font-sans, sans-serif); color: var(--color-ink, #1c1408); }
  /* Mystery Brief */
  .mb-section { margin-bottom: 10px; }
  .mb-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--color-muted, #6b5a3e); margin-bottom: 6px; }
  .mb-items { display: flex; flex-wrap: wrap; gap: 6px; }
  .mb-chip { display: flex; align-items: center; gap: 4px; background: var(--color-parch, #f5e8c8); border: 1px solid var(--color-border, #d4b896); border-radius: 999px; padding: 3px 10px; font-size: 13px; }
  .chip-icon { font-size: 14px; }
  /* Clues */
  .da-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--color-muted, #6b5a3e); }
  .clue-card { display: flex; gap: 10px; align-items: flex-start; background: #fff; border: 1px solid var(--color-border, #d4b896); border-radius: 8px; padding: 8px 12px; margin-bottom: 6px; }
  .clue-num { min-width: 20px; height: 20px; border-radius: 50%; background: var(--color-teal, #1a6b6b); color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .clue-text { font-size: 14px; line-height: 1.5; }
  /* Grid */
  .d-grid { border-collapse: collapse; width: 100%; table-layout: fixed; font-size: 12px; }
  .th-blank { background: transparent; }
  .th-cat { background: var(--color-parch, #f5e8c8); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; text-align: center; padding: 4px 2px; color: var(--color-muted, #6b5a3e); }
  .th-item { background: #fff; font-size: 11px; text-align: center; padding: 4px 2px; color: var(--color-ink, #1c1408); vertical-align: bottom; word-break: break-word; }
  .item-icon { display: block; font-size: 14px; margin-bottom: 2px; }
  .th-row { background: #fff; font-size: 11px; text-align: right; padding: 4px 6px; color: var(--color-ink, #1c1408); white-space: nowrap; }
  .row-icon { margin-right: 2px; }
  .d-cell { width: 36px; height: 36px; border: 1px solid var(--color-border, #d4b896); text-align: center; cursor: pointer; transition: background .15s; }
  .d-cell:hover { background: var(--color-parch, #f5e8c8); }
  .d-cell.state-x { background: #fff0f0; }
  .d-cell.state-o { background: #f0fff4; }
  .cell-mark { font-size: 16px; font-weight: 700; }
  .state-x .cell-mark { color: #b83232; }
  .state-o .cell-mark { color: #166534; }
  .section-left { border-left: 2px solid var(--color-border, #d4b896) !important; }
  .section-row td, .section-row th { border-top: 2px solid var(--color-border, #d4b896) !important; }
  /* Accusation panel */
  .ap-select-wrap { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 120px; }
  .ap-cat-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-muted, #6b5a3e); }
  .ap-select { width: 100%; border: 1px solid var(--color-border, #d4b896); border-radius: 6px; padding: 6px 8px; font-size: 13px; background: #fff; color: var(--color-ink, #1c1408); cursor: pointer; }
  /* Verdict */
  .verdict-card { border-radius: 10px; padding: 14px 16px; margin-top: 12px; }
  .verdict-card.correct { background: #f0fff4; border: 1px solid #166534; }
  .verdict-card.wrong { background: #fff0f0; border: 1px solid #b83232; animation: none; }
  .verdict-title { font-size: 14px; font-weight: 700; margin-bottom: 6px; }
  .verdict-card.correct .verdict-title { color: #166534; }
  .verdict-card.wrong .verdict-title { color: #b83232; }
  .verdict-text { font-size: 13px; line-height: 1.5; color: var(--color-ink, #1c1408); }
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    25% { transform: translateX(-6px); }
    75% { transform: translateX(6px); }
  }
</style>
<div class="de-wrap" style="display:flex;flex-direction:column;gap:20px;">
  <div data-de="mysteryBrief" style="display:flex;flex-wrap:wrap;gap:12px;"></div>
  <div data-de="clueList"></div>
  <div>
    <div class="da-label" style="margin-bottom:8px">Deduction Grid — click cells to mark ✗ (No) or ✓ (Yes)</div>
    <div data-de="gridWrapper" style="overflow-x:auto;"></div>
  </div>
  <div>
    <div class="da-label" style="margin-bottom:10px">Make your accusation</div>
    <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:10px;">
      <div data-de="accusationSelects" style="display:contents;"></div>
    </div>
    <button id="de-accuse-btn" style="
      background:var(--color-teal,#1a6b6b);color:#fff;border:none;border-radius:8px;
      padding:10px 24px;font-size:14px;font-weight:700;cursor:pointer;
      font-family:var(--font-caps,sans-serif);letter-spacing:.08em;
    ">Accuse →</button>
    <div data-de="verdictCard" style="display:none;">
      <div data-de="verdictTitle" class="verdict-title"></div>
      <div data-de="verdictText" class="verdict-text"></div>
    </div>
  </div>
</div>
`;

const DeductionEngineWrapper = forwardRef<EngineHandle, Props>(function DeductionEngineWrapper(
  { config, onSolve, onWrongGuess },
  ref
) {
  const mountRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let active = true;
    import('@/lib/engines/deduction-engine').then(({ DeductionEngine }) => {
      if (!active || !mountRef.current) return;
      mountRef.current.innerHTML = DEDUCTION_SHELL;
      const engine = new DeductionEngine(mountRef.current, config);
      engine.onSolve = (state: SolveState) => onSolve?.(state);
      engine.onWrongGuess = (acc: Record<string, string>) => onWrongGuess?.(acc);
      engineRef.current = engine;

      const accuseBtn = mountRef.current.querySelector('#de-accuse-btn');
      if (accuseBtn) accuseBtn.addEventListener('click', () => engine.accuse());
    });

    return () => {
      active = false;
      if (mountRef.current) mountRef.current.innerHTML = '';
      engineRef.current = null;
    };
  }, [config.id]);

  useImperativeHandle(ref, () => ({
    reset: () => engineRef.current?.reset(),
    getState: () => engineRef.current?.getState() ?? { solved: false },
  }));

  return <div ref={mountRef} className="puzzle-mount" />;
});

export default DeductionEngineWrapper;
