#!/usr/bin/env node
/**
 * vibe-webeffect installer
 * 사용법:
 *   npx vibe-webeffect            → ./.claude/skills/vibe-webeffect (프로젝트)
 *   npx vibe-webeffect --global   → ~/.claude/skills/vibe-webeffect (전역)
 *   npx vibe-webeffect --dir=경로 → 지정 경로/vibe-webeffect
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);
const SRC = path.join(__dirname, "..", "skill");

let base;
const dirArg = args.find(a => a.startsWith("--dir="));
if (dirArg) base = path.resolve(dirArg.split("=")[1]);
else if (args.includes("--global") || args.includes("-g"))
  base = path.join(os.homedir(), ".claude", "skills");
else base = path.join(process.cwd(), ".claude", "skills");

const DEST = path.join(base, "vibe-webeffect");

try {
  fs.mkdirSync(base, { recursive: true });
  fs.cpSync(SRC, DEST, { recursive: true });
  console.log("✔ vibe-webeffect 스킬 설치 완료");
  console.log("  위치: " + DEST);
  console.log("  구성: SKILL.md · catalog.json (72 효과) · references/recipes.md");
  console.log("");
  console.log("이제 에이전트(Claude Code 등)가 웹 UI 작업 시 자동으로 이 스킬을 참조합니다.");
  console.log('예: "포트폴리오 랜딩 만들어줘" → 어울리는 애니메이션 추천 + 적용');
} catch (e) {
  console.error("✘ 설치 실패:", e.message);
  process.exit(1);
}
