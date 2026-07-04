#!/usr/bin/env node
/**
 * vibe-webeffect installer — 크로스 에이전트 스킬 설치기
 *
 * 기본: .agents/skills/ (크로스 에이전트 표준: Codex·Copilot·Gemini CLI·Cursor·Goose 등)
 *     + .claude/skills/ (Claude Code)  ← 두 곳 모두 설치
 *
 * 사용법:
 *   npx vibe-webeffect              → 현재 프로젝트에 설치
 *   npx vibe-webeffect --global     → 홈 디렉토리에 설치 (~/.agents, ~/.claude)
 *   npx vibe-webeffect --agents     → .agents/skills 만
 *   npx vibe-webeffect --claude     → .claude/skills 만
 *   npx vibe-webeffect --dir=경로   → 지정 경로/vibe-webeffect 한 곳만
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);
const SRC = path.join(__dirname, "..", "skills", "vibe-webeffect");
const root = (args.includes("--global") || args.includes("-g")) ? os.homedir() : process.cwd();

let targets = [];
const dirArg = args.find(a => a.startsWith("--dir="));
if (dirArg) {
  targets = [path.resolve(dirArg.split("=")[1])];
} else if (args.includes("--agents")) {
  targets = [path.join(root, ".agents", "skills")];
} else if (args.includes("--claude")) {
  targets = [path.join(root, ".claude", "skills")];
} else {
  targets = [
    path.join(root, ".agents", "skills"),  // 크로스 에이전트 표준
    path.join(root, ".claude", "skills"),  // Claude Code
  ];
}

let ok = 0;
for (const base of targets) {
  const dest = path.join(base, "vibe-webeffect");
  try {
    fs.mkdirSync(base, { recursive: true });
    fs.cpSync(SRC, dest, { recursive: true });
    console.log("✔ " + dest);
    ok++;
  } catch (e) {
    console.error("✘ " + dest + " — " + e.message);
  }
}

if (ok) {
  console.log("");
  console.log("vibe-webeffect 스킬 설치 완료 (" + ok + "곳)");
  console.log("구성: SKILL.md · catalog.json (72 효과) · references/recipes.md");
  console.log("");
  console.log(".agents/skills → Codex · Copilot · Gemini CLI · Cursor · Goose 등 표준 지원 에이전트");
  console.log(".claude/skills → Claude Code");
  console.log('이제 "랜딩페이지 만들어줘"라고만 해도 어울리는 효과를 추천·적용합니다.');
} else {
  process.exit(1);
}
