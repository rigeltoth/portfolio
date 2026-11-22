import { Injectable, Pipe, PipeTransform, inject, signal } from '@angular/core';

export type Lang = 'en' | 'es';
export type Theme = 'dark' | 'light';

// Storage can throw (private mode, blocked site data); preferences are a convenience only.
function load(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function save(key: string, value: string): void {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

/** Language and color theme: device default first, then whatever the visitor picks. */
@Injectable({ providedIn: 'root' })
export class PrefsService {
  readonly lang = signal<Lang>(
    (load('lang') as Lang) ?? (navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en')
  );
  readonly theme = signal<Theme>(
    (load('theme') as Theme) ?? (window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  );

  constructor() {
    this.apply();
  }

  toggleLang(): void {
    this.lang.set(this.lang() === 'en' ? 'es' : 'en');
    save('lang', this.lang());
    this.apply();
  }

  toggleTheme(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
    save('theme', this.theme());
    this.apply();
  }

  t(key: string): string {
    return DICT[this.lang()][key] ?? DICT.en[key] ?? key;
  }

  private apply(): void {
    const root = document.documentElement;
    root.lang = this.lang();
    root.classList.toggle('light', this.theme() === 'light');
  }
}

@Pipe({ name: 't', pure: false })
export class TPipe implements PipeTransform {
  private prefs = inject(PrefsService);
  transform(key: string): string {
    return this.prefs.t(key);
  }
}

const DICT: Record<Lang, Record<string, string>> = {
  en: {
    'role': 'Senior Software Developer',
    'nav.home': 'Home',
    'nav.profile': 'Profile',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'toggle.lang': 'Cambiar a español',
    'toggle.theme.light': 'Switch to light mode',
    'toggle.theme.dark': 'Switch to dark mode',

    'hero.hi': "Hi, I'm Ronnovič Rigel Toth",
    'hero.title.pre': 'Senior Software Developer building',
    'hero.title.hl': 'AI agents',
    'hero.title.post': 'and modern web apps',
    'hero.sub': '5+ years shipping production systems for Copa Airlines - Wingo and XM. Co-founder & CEO of Ecommer, where I build SimetrIA, an omnichannel AI sales agent.',
    'hero.cta.profile': 'View Profile',
    'hero.cta.contact': 'Contact me',
    'tag.agents': 'LLM Agents',
    'home.viewServices': 'View Services',
    'home.viewProfile': 'View Profile',
    'home.preview.services': 'Services page preview',
    'home.preview.profile': 'Profile page preview',
    'home.hire': "Want to work together? Let's build something great.",
    'home.card.role': 'Senior Software Developer • AI Agents & LLM Applications',
    'home.card.bio': 'Senior software developer with 5+ years building production systems for Copa Airlines - Wingo and XM. Co-founder & CEO of Ecommer, where I lead SimetrIA, an omnichannel AI sales agent on WhatsApp, Instagram and Messenger. Final-year Physics Engineering student at Universidad del Cauca',
    'home.card.cta': 'Profile',
    'photo.alt': 'Photo of Ronnovič Rigel Toth',

    'card.view': 'View',
    'card.fe.title': 'Frontend',
    'card.fe.body': 'SPAs in Angular, React and Next.js with TypeScript: lazy loading, routing, state with RxJS, REST integrations, auth flows and responsive UI with Tailwind.',
    'card.be.title': 'Backend',
    'card.be.body': 'APIs with Python (FastAPI), Node.js (NestJS, Express) and Java (Spring Boot, WebFlux), backed by PostgreSQL, Redis and MongoDB, shipped with Docker and CI/CD.',
    'card.ai.title': 'AI Agents & LLMs',
    'card.ai.body': 'Agents on Azure AI Foundry and Google ADK, vector retrieval with Qdrant, tool use and function calling, deployed on Azure, GCP and AWS.',

    'svc.ai.title': 'AI Agents & LLMs',
    'svc.ai.body': 'Production AI agents on Azure AI Foundry and Google ADK, with Qdrant retrieval and function calling, connected to WhatsApp, Instagram and Messenger and grounded in your real data',
    'svc.quality.title': 'Quality',
    'svc.quality.body': 'Senior-level, production-grade code with testing, code review, CI/CD and security controls such as PCI DSS, proven on airline and energy market systems',
    'svc.comm.title': 'Communication',
    'svc.comm.body': 'Clear, proactive communication in English and Spanish. I work in remote, cross-functional teams and lead a 13-person founding team',
    'svc.ux.title': 'UX/UI',
    'svc.ux.body': 'Fast, responsive and accessible interfaces in Angular, React and Next.js with Tailwind, designed so users enjoy them and connect with your brand',
    'svc.e2e.title': 'End-to-End',
    'svc.e2e.body': 'From idea to production: frontend, backend APIs in Python, Node.js and Java, databases, Docker and cloud deployment on Azure, GCP and AWS',
    'svc.cta': "What are you waiting for? Let's build the future.",
    'svc.cta.sub': 'Tell me about your product, your team or your idea, and let\'s see how I can help.',
    'stat.years': 'years building production systems',
    'stat.airline': 'years building airline systems for Copa Airlines - Wingo',
    'stat.clouds': 'clouds: Azure, GCP and AWS',
    'stat.industries': 'industries: aviation, energy and e-commerce',

    'prof.skills': 'Skills',
    'prof.bio1': 'Senior software developer with 5+ years building production systems for Copa Airlines - Wingo and XM. On the frontend I build SPAs with Angular, React and Next.js in TypeScript; on the backend I work with Python (FastAPI), Node.js (NestJS, Express) and Java (Spring Boot, WebFlux), backed by PostgreSQL, Redis and MongoDB',
    'prof.bio2': 'Today I focus on AI agents and LLM applications: agents on Azure AI Foundry, vector retrieval with Qdrant, tool use and function calling, and Google ADK, shipped with Docker and CI/CD on Azure, GCP and AWS',
    'prof.pro': 'Pro Skills',
    'prof.english': 'English (C1)',
    'prof.learning': 'Fast Learning',
    'prof.team': 'Teamwork',
    'prof.contact': 'Contact',
    'prof.q.title': 'Got a question?',
    'prof.q.sub': "I'd like to talk more about what you need.",
    'prof.location': 'Location',
    'prof.email': 'Email',
    'prof.phone': 'Phone Number',
  },
  es: {
    'role': 'Desarrollador de Software Senior',
    'nav.home': 'Inicio',
    'nav.profile': 'Perfil',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'toggle.lang': 'Switch to English',
    'toggle.theme.light': 'Cambiar a modo claro',
    'toggle.theme.dark': 'Cambiar a modo oscuro',

    'hero.hi': 'Hola, soy Ronnovič Rigel Toth',
    'hero.title.pre': 'Desarrollador de Software Senior creando',
    'hero.title.hl': 'agentes de IA',
    'hero.title.post': 'y aplicaciones web modernas',
    'hero.sub': 'Más de 5 años construyendo sistemas en producción para Copa Airlines - Wingo y XM. Cofundador y CEO de Ecommer, donde desarrollo SimetrIA, un agente de ventas con IA omnicanal.',
    'hero.cta.profile': 'Ver perfil',
    'hero.cta.contact': 'Contáctame',
    'tag.agents': 'Agentes LLM',
    'home.viewServices': 'Ver servicios',
    'home.viewProfile': 'Ver perfil',
    'home.preview.services': 'Vista previa de la página de servicios',
    'home.preview.profile': 'Vista previa de la página de perfil',
    'home.hire': '¿Trabajamos juntos? Construyamos algo grandioso.',
    'home.card.role': 'Desarrollador de Software Senior • Agentes de IA y aplicaciones LLM',
    'home.card.bio': 'Desarrollador de software senior con más de 5 años construyendo sistemas en producción para Copa Airlines - Wingo y XM. Cofundador y CEO de Ecommer, donde lidero SimetrIA, un agente de ventas con IA omnicanal en WhatsApp, Instagram y Messenger. Estudiante de último año de Ingeniería Física en la Universidad del Cauca',
    'home.card.cta': 'Perfil',
    'photo.alt': 'Foto de Ronnovič Rigel Toth',

    'card.view': 'Ver',
    'card.fe.title': 'Frontend',
    'card.fe.body': 'SPAs en Angular, React y Next.js con TypeScript: lazy loading, enrutamiento, estado con RxJS, integraciones REST, flujos de autenticación e interfaces responsivas con Tailwind.',
    'card.be.title': 'Backend',
    'card.be.body': 'APIs con Python (FastAPI), Node.js (NestJS, Express) y Java (Spring Boot, WebFlux), sobre PostgreSQL, Redis y MongoDB, desplegadas con Docker y CI/CD.',
    'card.ai.title': 'Agentes de IA y LLMs',
    'card.ai.body': 'Agentes en Azure AI Foundry y Google ADK, búsqueda vectorial con Qdrant, uso de herramientas y function calling, desplegados en Azure, GCP y AWS.',

    'svc.ai.title': 'Agentes de IA y LLMs',
    'svc.ai.body': 'Agentes de IA en producción con Azure AI Foundry y Google ADK, búsqueda con Qdrant y function calling, conectados a WhatsApp, Instagram y Messenger y basados en tus datos reales',
    'svc.quality.title': 'Calidad',
    'svc.quality.body': 'Código de nivel senior listo para producción, con pruebas, code review, CI/CD y controles de seguridad como PCI DSS, probado en sistemas de aerolíneas y del mercado de energía',
    'svc.comm.title': 'Comunicación',
    'svc.comm.body': 'Comunicación clara y proactiva en español e inglés. Trabajo en equipos remotos y multidisciplinarios y lidero un equipo fundador de 13 personas',
    'svc.ux.title': 'UX/UI',
    'svc.ux.body': 'Interfaces rápidas, responsivas y accesibles en Angular, React y Next.js con Tailwind, pensadas para que los usuarios las disfruten y conecten con tu marca',
    'svc.e2e.title': 'De principio a fin',
    'svc.e2e.body': 'De la idea a producción: frontend, APIs backend en Python, Node.js y Java, bases de datos, Docker y despliegue en la nube en Azure, GCP y AWS',
    'svc.cta': '¿Qué esperas? Construyamos el futuro.',
    'svc.cta.sub': 'Cuéntame sobre tu producto, tu equipo o tu idea, y veamos cómo puedo ayudarte.',
    'stat.years': 'años construyendo sistemas en producción',
    'stat.airline': 'años construyendo sistemas de aerolínea para Copa Airlines - Wingo',
    'stat.clouds': 'nubes: Azure, GCP y AWS',
    'stat.industries': 'industrias: aviación, energía y e-commerce',

    'prof.skills': 'Habilidades',
    'prof.bio1': 'Desarrollador de software senior con más de 5 años construyendo sistemas en producción para Copa Airlines - Wingo y XM. En el frontend construyo SPAs con Angular, React y Next.js en TypeScript; en el backend trabajo con Python (FastAPI), Node.js (NestJS, Express) y Java (Spring Boot, WebFlux), sobre PostgreSQL, Redis y MongoDB',
    'prof.bio2': 'Hoy me enfoco en agentes de IA y aplicaciones LLM: agentes en Azure AI Foundry, búsqueda vectorial con Qdrant, uso de herramientas y function calling, y Google ADK, desplegados con Docker y CI/CD en Azure, GCP y AWS',
    'prof.pro': 'Habilidades profesionales',
    'prof.english': 'Inglés (C1)',
    'prof.learning': 'Aprendizaje rápido',
    'prof.team': 'Trabajo en equipo',
    'prof.contact': 'Contacto',
    'prof.q.title': '¿Tienes alguna pregunta?',
    'prof.q.sub': 'Me encantaría saber más sobre lo que necesitas.',
    'prof.location': 'Ubicación',
    'prof.email': 'Correo',
    'prof.phone': 'Teléfono',
  },
};
