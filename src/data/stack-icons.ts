import {
  siAngular, siAntdesign, siClaude, siCursor, siDart, siDocker, siDotnet, siFigma, siFirebase,
  siFlutter, siMongodb, siOpencode, siOpenjdk, siPostgresql, siPrimeng, siReact, siReactivex,
  siSpringboot, siSqlite, siTailwindcss, siTypescript,
} from 'simple-icons';

/**
 * Brand icons come from `simple-icons` (CC0) and are inlined at build time, so nothing from the
 * package reaches the browser. Brands it does not ship (C#, Oracle, SignalR, FluentValidation)
 * and generic concepts (CI/CD) get a neutral geometric glyph instead of an imitation logo.
 * Approximations: Java uses the OpenJDK mark, ng-zorro-antd uses Ant Design (the system it implements).
 */
export type IconDef =
  | { kind: 'brand'; path: string }
  | { kind: 'glyph'; svg: string };

const brand = (icon: { path: string }): IconDef => ({ kind: 'brand', path: icon.path });
const glyph = (svg: string): IconDef => ({ kind: 'glyph', svg });

export const icons = {
  dotnet: brand(siDotnet),
  firebase: brand(siFirebase),
  java: brand(siOpenjdk),
  spring: brand(siSpringboot),
  angular: brand(siAngular),
  typescript: brand(siTypescript),
  tailwind: brand(siTailwindcss),
  rxjs: brand(siReactivex),
  antd: brand(siAntdesign),
  primeng: brand(siPrimeng),
  react: brand(siReact),
  postgres: brand(siPostgresql),
  mongodb: brand(siMongodb),
  sqlite: brand(siSqlite),
  flutter: brand(siFlutter),
  dart: brand(siDart),
  claude: brand(siClaude),
  docker: brand(siDocker),
  figma: brand(siFigma),
  cursor: brand(siCursor),
  opencode: brand(siOpencode),
  csharp: glyph('<text x="12" y="16.2" text-anchor="middle" font-family="JetBrains Mono Variable, monospace" font-size="11.5" font-weight="700" fill="currentColor" stroke="none">C#</text>'),
  oracle: glyph('<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>'),
  signalr: glyph('<circle cx="12" cy="12" r="1.8" fill="currentColor"/><path d="M8 8a5.7 5.7 0 0 0 0 8M16 8a5.7 5.7 0 0 1 0 8M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"/>'),
  validation: glyph('<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
  cicd: glyph('<path d="M20 7a8 8 0 0 0-14-2M4 5v4h4M4 17a8 8 0 0 0 14 2M20 19v-4h-4"/>'),
} satisfies Record<string, IconDef>;

export type IconKey = keyof typeof icons;
