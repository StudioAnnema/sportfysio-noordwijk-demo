# Stijlgids — Sportfysiotherapie Noordwijk (demo-redesign)

## Analyse huidige site
- Eén lange tekstalinea als hero, generieke petrol-gradient, Roboto, kleine foto's.
- Sterke inhoud wordt niet benut: acute blessure binnen 24 uur, LUMC/Rijnland/VSO-netwerken,
  twee MSc-sportfysiotherapeuten met topsportreferenties, locatie in Zwembad BinnenZee aan de Nieuwe Zeeweg.
- Huisstijl uit logo + teamkleding: hemelsblauw, oranje, marine poloshirts.

## Drie creatieve richtingen
1. **Trede voor trede** — de hero-foto (Edward & Mariëlle die de trap op rennen) wordt het concept:
   herstel is een trap omhoog, van blessure naar wedstrijdniveau. Sportieve, compacte display-typografie.
2. **Aan Zee** — rustig en kustachtig: zand, golflijnen, duinen. Mooi, maar te zacht voor een sportpraktijk
   en snel generiek "wellness".
3. **Het logboek** — site als revalidatieschema/trainingslogboek met tabellen en tijdcodes. Onderscheidend,
   maar koel en te technisch voor de recreant.

**Gekozen: 1 — Trede voor trede.** Specifiek voor deze praktijk (eigen foto, eigen verhaal), energiek
zonder schreeuwerig te zijn, en het vertaalt "actieve aanpak + eigen regie" direct naar beeld.

## Signatuur-element
Een oranje **traplijn** (getrapte SVG-lijn) die in de hero tekent en terugkomt als scheiding tussen secties.
In de sectie "Zo werken wij" klimt de lijn per fase: blessure → onderzoek → herstel → terug op het veld.
Echte volgorde, dus treden zijn hier terecht.

## Kleurpalet
| Token | Hex | Rol |
|---|---|---|
| `--marine` | `#0D2640` | Primair, donkere vlakken (kleur van de polo's) |
| `--hemel` | `#1C9AD6` | Logo-blauw, links en details |
| `--oranje` | `#F2762E` | Accent, CTA's, traplijn |
| `--zand` | `#F5F0E7` | Achtergrond — warm, Noordwijk aan Zee |
| `--inkt` | `#14212E` | Tekst |
| `--grijs` | `#5B6875` | Secundaire tekst |

Contrast: inkt op zand ≈ 15:1; wit op marine ≈ 15:1; CTA-tekst donker (`--inkt`) op oranje i.p.v. wit
(wit op oranje haalt geen AA bij normale tekst).

## Typografie
- **Display:** Big Shoulders Display (700/800) — scorebord-/sporthal-karakter, compact, hoofdletters voor koppen.
- **Body:** Instrument Sans (400/500/600) — helder, warm, goed leesbaar.
- Schaal: hero clamp(3.4rem, 9vw, 8rem); h2 clamp(2.4rem, 5vw, 4rem); body 1.0625rem / 1.6.

## Spacing & grid
- 8px-basis; secties 96–144px verticaal op desktop, 64px op mobiel.
- Max. breedte 1200px, gutter 16px mobiel / 32px desktop.
- Asymmetrische layouts (7/5) i.p.v. gelijke kaartjesrijen.

## Componenten
- **Knop primair:** oranje vlak, inkt-tekst, hoek 2px (strak, sportief), pijl die bij hover een trede omhoog stapt.
- **Knop secundair:** omlijnd, marine of wit op donker.
- **Specialisatie-rij:** lijstitems met grote naam + korte uitleg, geen kaart-grid.
- **Referentie:** grote quote in display-font, foto rond, naam + rol.
- **Formulier:** labels boven velden, 2px onderrand, duidelijke foutmelding in tekst.

## Tone of voice
- Je-vorm, actief, kort. Concreet: "Binnen 24 uur", "MSc", "€ 49,50".
- Geen "unlock/optimaliseer je potentieel". Wél: "Terug naar je sport. Trede voor trede."
- Echte teksten van de huidige site overnemen en inkorten waar nodig; feiten niet verzinnen.

## Pagina's
- `index.html` — hero, 24-uursbelofte, aanpak (traplijn), specialisaties, team, referenties, partners, contact.
- `specialisaties.html` — alle zeven specialisaties volledig.
- `team.html` — Edward, Mariëlle, Jerome uitgebreid.
- `praktisch.html` — tarieven, directe toegankelijkheid, huisregels, vergoeding.
- `afspraak.html` — afspraakformulier + contact + openingstijden.
