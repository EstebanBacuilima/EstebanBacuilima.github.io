import type { Localized } from '../i18n/utils';
import type { IconKey } from './stack-icons';

export type Level = 'core' | 'familiar';

/** Shown in the popover of the main technologies. Only confirmed facts: leave a field out if unknown. */
export interface TechDetail {
  role: Localized;
  /** Key libraries, taken from the package manifests of DomifyPOS / DomifyTool. */
  libs?: string[];
  usedIn?: string[];
}

export interface StackItem {
  name: string;
  /** 'core': most used day to day. 'familiar': used less, but known. */
  level: Level;
  icon?: IconKey;
  detail?: TechDetail;
}

export interface StackGroup {
  title: Localized;
  /** Bento footprint: 'wide' spans 2 columns, 'full' spans the whole row on large screens. */
  size: 'normal' | 'wide' | 'full';
  items: StackItem[];
}

const core = (name: string, icon?: IconKey, detail?: TechDetail): StackItem => ({ name, level: 'core', icon, detail });
const familiar = (name: string, icon?: IconKey): StackItem => ({ name, level: 'familiar', icon });

const domify = ['DomifyPOS', 'DomifyTool'];

// Group order is the bento order: Backend + Databases / Mobile + Frontend / Tools.
export const stackGroups: StackGroup[] = [
  {
    title: { es: 'Backend', en: 'Backend' },
    size: 'wide',
    items: [
      core('C#', 'csharp', {
        role: { es: 'Lenguaje principal del backend', en: 'Main backend language' },
        usedIn: domify,
      }),
      core('.NET 8/10', 'dotnet', {
        role: { es: 'Backend principal', en: 'Main backend' },
        libs: ['ASP.NET Core', 'Entity Framework Core', 'FluentValidation', 'Npgsql'],
        usedIn: domify,
      }),
      core('FluentValidation', 'validation'),
      core('SignalR', 'signalr'),
      core('Firebase', 'firebase'),
      familiar('Java', 'java'),
      familiar('Spring Boot', 'spring'),
    ],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    size: 'normal',
    items: [
      core('PostgreSQL', 'postgres', {
        role: { es: 'Base de datos principal', en: 'Main database' },
        libs: ['Npgsql', 'Entity Framework Core'],
        usedIn: domify,
      }),
      familiar('Oracle', 'oracle'),
      familiar('MongoDb', 'mongodb'),
      familiar('SQLite', 'sqlite'),
    ],
  },
  {
    title: { es: 'Móvil', en: 'Mobile' },
    size: 'normal',
    items: [
      core('Flutter', 'flutter', {
        role: { es: 'Experiencia adicional: apps móviles', en: 'Additional experience: mobile apps' },
        libs: ['Dio', 'flutter_bloc', 'go_router'],
      }),
      core('Dart', 'dart'),
    ],
  },
  {
    title: { es: 'Frontend', en: 'Frontend' },
    size: 'wide',
    items: [
      core('Angular', 'angular', {
        role: { es: 'Frontend principal', en: 'Main frontend' },
        libs: ['RxJS', 'ng-zorro-antd', 'Tailwind CSS', '@microsoft/signalr'],
        usedIn: domify,
      }),
      core('TypeScript', 'typescript', {
        role: { es: 'Lenguaje del frontend web', en: 'Web frontend language' },
        usedIn: domify,
      }),
      core('Tailwind CSS', 'tailwind', {
        role: { es: 'Estilos del frontend', en: 'Frontend styling' },
        usedIn: ['DomifyTool'],
      }),
      core('RxJS', 'rxjs'),
      core('ng-zorro-antd', 'antd'),
      familiar('primeNg', 'primeng'),
      familiar('React', 'react'),
    ],
  },
  {
    title: { es: 'Diseño y herramientas', en: 'Design and tools' },
    size: 'full',
    items: [
      core('OpenCode', 'opencode'),
      core('Claude', 'claude'),
      core('Docker', 'docker'),
      familiar('CI/CD', 'cicd'),
      familiar('Figma', 'figma'),
      familiar('Cursor', 'cursor'),
    ],
  },
];
