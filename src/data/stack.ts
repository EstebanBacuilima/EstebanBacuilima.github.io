import type { Localized } from '../i18n/utils';

export type Level = 'core' | 'familiar';

export interface StackItem {
  name: string;
  /** 'core': most used day to day. 'familiar': used less, but known. */
  level: Level;
}

export interface StackGroup {
  title: Localized;
  items: StackItem[];
}

const core = (name: string): StackItem => ({ name, level: 'core' });
const familiar = (name: string): StackItem => ({ name, level: 'familiar' });

export const stackGroups: StackGroup[] = [
  {
    title: { es: 'Backend', en: 'Backend' },
    items: [
      core('C#'),
      core('.NET 8/10'),
      core('FluentValidation'),
      core('SignalR'),
      core('Firebase'),
      familiar('Java'),
      familiar('Spring Boot'),
    ],
  },
  {
    title: { es: 'Frontend', en: 'Frontend' },
    items: [
      core('Angular'),
      core('TypeScript'),
      core('Tailwind CSS'),
      core('RxJS'),
      core('ng-zorro-antd'),
      familiar('primeNg'),
      familiar('React'),
    ],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: [core('PostgreSQL'), familiar('Oracle'), familiar('MongoDb'), familiar('SQLite')],
  },
  {
    title: { es: 'Móvil', en: 'Mobile' },
    items: [core('Flutter'), core('Dart')],
  },
  {
    title: { es: 'Diseño y herramientas', en: 'Design and tools' },
    items: [core('OpenCode'), core('Claude'), core('Docker'), familiar('CI/CD'), familiar('Figma'), familiar('Cursor')],
  },
];
