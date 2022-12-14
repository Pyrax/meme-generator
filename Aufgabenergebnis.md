# Aufgabenergebnis

## Eingesetzte Technologien / Frameworks

Folgende Technolgien / Frameworks setze ich in meinem Projekt ein:

- TypeScript
- React
- TailwindCSS

Für React habe ich mich entschieden, weil ich zum einen die meiste Erfahrung damit habe und es zum anderen weit verbreitet ist. React-Komponenten bieten eine gute Kapselung in lose gekoppelte Einheiten.

Zusätzlich habe ich auf TypeScript gesetzt für Auto-Vervollständigung und Type-Informationen, um kleinere Fehler durch falsche Types zu verhindern und das Nachschlagen von Funktionen inklusive Parametern zu beschleunigen.

Zudem habe ich mich für das Utility-First-Framework TailwindCSS entschieden, weil es durch Utility-Klassen und vordefinierte Werte ein einheitliches und schnelles Design ermöglicht. Gegenüber CSS-Regeln nach der [BEM-Methode](https://en.bem.info/methodology/) oder CSS-Module hat Tailwind den Vorteil, dass keine semantischen Klassen-Namen ausgedacht werden müssen. Stattdessen werden CSS-ähnliche Klassen verwendet. Struktur und Wartbarkeit ist dabei weitgehend durch die Abstrahierung in (React-)Komponenten gegeben.

## Eingesetzte 3rd Party Libraries

Ich setze in meinem Projekt die folgenden 3rd Party Libraries ein:

| Name                                                           | Begründung                                                                                                                        |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [classnames](https://www.npmjs.com/package/classnames)         | Zum einfachen Zusammenfügen von Default-Klassen und Klassen mit Bedingungen.                                                      |
| [zustand](https://github.com/pmndrs/zustand)                   | Simples State-Management (leichter als Redux) für einfacheren State-Flow ohne Kontext oder wiederholtes Weiterreichen von Events. |
| [react-icons](https://react-icons.github.io/react-icons/)      | Import von FontAwesome-Icons ohne zusätzliches Setup.                                                                             |
| [react-colorful](https://www.npmjs.com/package/react-colorful) | Colorpicker mit kleiner Bundle-Size und anpassbar durch eigenes CSS.                                                              |
| [autoprefixer](https://github.com/postcss/autoprefixer)        | Teil von TailwindCSS für Vendor-Präfixe für Multi-Browser-Support.                                                                |
| [postcss](https://postcss.org/)                                | Teil von TailwindCSS zum Übersetzen der Tailwind-Klassen.                                                                         |
| [Vite](https://vitejs.dev/)                                    | Builds mit minimalen Setup, TypeScript-Support und Hot Module Replacements (HMR).                                                 |
| TailwindCSS, React, TypeScript                                 | siehe vorheriger Abschnitt                                                                                                        |

## Installation / Ausführen des Projektes

Folgende Komponenten müssen lokal installiert sein:

- [Node.js](https://nodejs.org/en/) ~18.12.1

Um das Projekt lokal auszuführen, folgendes in der Commandline eingeben:

```console
git clone https://github.com/Pyrax/meme-generator.git
cd meme-generator
npm install
npm run dev
```

Nun läuft die Anwendung standardmäßig unter [http://localhost:5173](http://localhost:5173).

## [Live demo](https://pyrax-challenge.netlify.app/)
