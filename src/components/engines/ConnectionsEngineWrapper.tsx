'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { ConnectionsPuzzleConfig, SolveState } from '@/types/puzzle';
import type { EngineHandle } from '@/components/puzzle/PuzzleShell';

interface Props {
  config: ConnectionsPuzzleConfig;
  onSolve?: (state: SolveState) => void;
  onMistake?: (attempt: { attempt: string[]; oneAway: boolean }) => void;
}

const CONNECTIONS_STYLES = `
  .conn-wrap { display:flex; flex-direction:column; gap:12px; width:100%; max-width:480px; margin:0 auto; font-family:var(--font-sans,sans-serif); }
  .solved-groups-area { display:flex; flex-direction:column; gap:6px; }
  .solved-group { border-radius:10px; padding:10px 14px; color:#fff; }
  .sg-label { display:flex; justify-content:space-between; font-weight:700; font-size:0.8rem; letter-spacing:0.08em; margin-bottom:4px; }
  .sg-items { display:flex; flex-wrap:wrap; gap:6px; font-size:0.85rem; }
  .sg-item { background:rgba(255,255,255,0.2); padding:2px 8px; border-radius:20px; }
  .sg-connection { font-size:0.75rem; opacity:0.85; margin-top:4px; font-style:italic; }
  .tile-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
  .tile { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px; padding:10px 4px; border-radius:8px; cursor:pointer; background:var(--color-parch,#f5e8c8); border:2px solid transparent; transition:all 0.15s; min-height:64px; text-align:center; user-select:none; }
  .tile:hover { background:var(--color-border,#d4b896); }
  .tile.selected { border-color:var(--color-teal,#1a6b6b); background:#d1f0ee; }
  .tile.wrong { animation:shake 0.3s; border-color:var(--color-rose,#b83232); }
  @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-4px)} 75%{transform:translateX(4px)} }
  .tile-icon { font-size:1.4rem; line-height:1; }
  .tile-text { font-size:0.72rem; font-weight:600; color:var(--color-ink,#1c1408); line-height:1.2; }
  .conn-controls { display:flex; align-items:center; justify-content:space-between; gap:8px; }
  .lives-row { display:flex; gap:6px; }
  .life-dot { width:14px; height:14px; border-radius:50%; background:var(--color-teal,#1a6b6b); transition:background 0.2s; }
  .life-dot.lost { background:var(--color-border,#d4b896); }
  .sel-count { font-size:0.8rem; color:var(--color-muted,#6b5a3e); flex:1; text-align:center; }
  .conn-btn { padding:6px 14px; border-radius:6px; font-size:0.8rem; font-weight:600; cursor:pointer; border:2px solid var(--color-border,#d4b896); background:#fff; color:var(--color-ink,#1c1408); transition:background 0.1s; }
  .conn-btn:hover:not(:disabled) { background:var(--color-parch,#f5e8c8); }
  .conn-btn:disabled { opacity:0.4; cursor:default; }
  .conn-btn.submit { background:var(--color-teal,#1a6b6b); color:#fff; border-color:var(--color-teal,#1a6b6b); }
  .conn-btn.submit:hover:not(:disabled) { background:#155858; }
  .win-panel { display:none; margin-top:8px; padding:14px; border-radius:10px; background:var(--color-parch,#f5e8c8); border:2px solid var(--color-teal,#1a6b6b); text-align:center; font-size:0.9rem; color:var(--color-ink,#1c1408); }
  .win-panel.show { display:block; }
`;

const CONNECTIONS_SHELL = `
  <style>${CONNECTIONS_STYLES}</style>
  <div class="conn-wrap">
    <div id="solvedGroups" class="solved-groups-area"></div>
    <div id="tileGrid" class="tile-grid"></div>
    <div class="conn-controls">
      <div class="lives-row">
        <div id="life-0" class="life-dot"></div>
        <div id="life-1" class="life-dot"></div>
        <div id="life-2" class="life-dot"></div>
        <div id="life-3" class="life-dot"></div>
      </div>
      <span id="selCount" class="sel-count">Select 4 tiles, then submit</span>
      <button id="shuffleBtn" class="conn-btn">Shuffle</button>
      <button id="submitBtn" class="conn-btn submit" disabled>Submit</button>
    </div>
    <div id="winPanel" class="win-panel">
      <span id="winText"></span>
    </div>
  </div>
`;

const ConnectionsEngineWrapper = forwardRef<EngineHandle, Props>(function ConnectionsEngineWrapper(
  { config, onSolve, onMistake },
  ref
) {
  const mountRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let active = true;
    import('@/lib/engines/connections-engine').then(({ ConnectionsEngine }) => {
      if (!active || !mountRef.current) return;
      mountRef.current.innerHTML = CONNECTIONS_SHELL;
      const engine = new ConnectionsEngine(mountRef.current, config);
      engine.onSolve = (state: SolveState) => onSolve?.(state);
      engine.onMistake = (att: { attempt: string[]; oneAway: boolean }) => onMistake?.(att);
      engineRef.current = engine;

      // Wire shuffle button
      const shuffleBtn = mountRef.current.querySelector('#shuffleBtn');
      if (shuffleBtn) shuffleBtn.addEventListener('click', () => engine.shuffle());

      // Wire submit button
      const submitBtn = mountRef.current.querySelector('#submitBtn');
      if (submitBtn) submitBtn.addEventListener('click', () => engine.submit());
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

export default ConnectionsEngineWrapper;
