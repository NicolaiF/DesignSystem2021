# Designsystem Fagdag 30 Juli 2021

Hvordan starte:

1. `git clone https://github.com/NicolaiF/DesignSystem2021.git && cd designsystem2021`
2. `yarn` (Hvis du ikke har yarn innstalert, kjør denne `npm install --global yarn` )
3. `cd packages/tokens && yarn build && cd ../..`
4. `yarn start` for å starte opp nettsiden.

## Litt om oppsettet

`src/pages/index.tsx` inneholder hovedsiden som vises når du kjører `yarn start`
`src/pages/kontakt-oss.tsx` er siden du skal utforme ved hjelp av komponentene `Button` `Input`, `Heading` og `Link`

`packages` inneholder de forskjellige komponentene som brukes på nettsiden.

<!-- Ignorer denne, funker nok ikke -->
<!-- Kjør `yarn start` i en av disse mappene for å få "hot reload" av komponentene, samtidig som du kjører `yarn start` i rotmappen (steg 4 over). -->


`packages/tokens` inneholder fargerverdier som blir bygd til SCSS-variabler, som du kan bruke i komponentene du lager.
