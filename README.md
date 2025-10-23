# Hópaverkefni 1

## Keyrsla verkefnis.
Keyrir Sass og fylgist með breytingum:
npm run dev
eða 
npm start

Framleiðslu build fæst með npm run build

### Lint
npm run lint

Til að laga villur sjálfkrafa:
npm run lint:scss:fix

## Repo Skipulag

<pre> ## Repo Skipulag ``` . ├─ img/ # Myndir sem notaðar eru í verkefninu ├─ myndir/ # Myndefni fyrir síðuna (avatar, icons, o.fl.) │ ├─ about.jpg │ ├─ abstrakt.jpg │ ├─ avatar.png │ ├─ fartolva.jpg │ ├─ instagram.png │ ├─ linkedin.png │ ├─ placeholder.png │ ├─ twitter.png │ └─ youtube.png │ ├─ node_modules/ # Sjálfvirkt bætt við af npm │ ├─ partials/ # Endurnýtt HTML efni (ef við á) ├─ scripts/ # JavaScript (ef við á) │ ├─ scss/ │ ├─ main.scss # Aðalskrá sem tengir öll SCSS component │ └─ components/ │ ├─ _variables.scss # CSS breytur og grunnstílar │ ├─ _filter-card.scss # filter-card component │ ├─ _searchbar.scss # searchbar component │ ├─ _cards.scss # cards component │ ├─ _layout.scss # grid/container skipulag │ ├─ _footer.scss # fótur vefs │ ├─ _header.scss # haus vefs │ ├─ _index.scss # forsíðu efni │ ├─ _um-okkur.scss # um-okkur síða │ └─ _lausn.scss # lausn/laust efni │ ├─ sidur/ # Undirsíður vefsins │ ├─ lausn.html │ ├─ lausnir.html │ └─ um-okkur.html │ ├─ styles/ │ ├─ main.css # Þýdd Sass skrá │ └─ main.css.map │ ├─ index.html # Forsíða verkefnisins ├─ package.json # NPM stillingar, scripts og dependencies ├─ .stylelintrc.json # Reglur fyrir Stylelint ├─ .stylelintignore # Skrár sem Stylelint hunsar └─ README.md # Þessi skrá ``` </pre>
## 👥 Höfundar

| Nafn | HÍ notendanafn | Netfang | GitHub |
|------|-----------------|----------|---------|
| **Einar Atli Guðnason** | eag19 | eag19@hi.is | [@einaratli](https://github.com/einaratli) |
| **Ólafur Breki Guðnason** | obg6 | obg6@hi.is | [@Olibreki](https://github.com/Olibreki) |
