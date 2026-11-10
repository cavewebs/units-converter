# Units Converter

A Next.js site for converting between units of measurement. Pick a category, choose two units, enter a value, and get a numeric result plus the amount written out in words.

Conversion data, ratios, and formulas live in `lib/conversion-data.ts`. `app/sitemap.ts` and `app/robots.ts` point the public site at https://unitsconverter.xyz.

## Categories

These are the categories defined in `lib/conversion-data.ts`:

- Weight
- Length
- Temperature
- Volume
- Area
- Speed
- Time
- Digital Storage
- Pressure
- Energy
- Power
- Angle
- Frequency
- Fuel Economy
- Data Transfer
- Force
- Torque
- Illuminance
- Typography
- Electric Current
- Voltage
- Resistance
- Flow Rate

Temperature conversions use dedicated Celsius / Fahrenheit / Kelvin formulas. Fuel economy units with `isInverse` (`L/100km`, `gal/100mi`) invert against a km/L base. Other units convert by ratio against the category's base unit.

## Requirements

- Node.js 18.18 or later (Next.js 15)
- npm (this repo ships `package-lock.json`)

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

`npm start` serves the production build on http://localhost:3000.

## Project structure

```
app/                          App Router pages, layout, sitemap, robots
  page.tsx                    Homepage (popular conversions + category list)
  convert/[category]/         Category page and per-pair conversion pages
components/                   App UI and shadcn/ui primitives
  conversion-form.tsx         From/to inputs, swap, and result
  category-list.tsx           Category grid (this search filter works)
  popular-conversions.tsx     Hard-coded popular pair links
  ad-banner.tsx               Placeholder ad slot
lib/
  conversion-data.ts          Categories, units, convert(), formula copy
  category.ts                 Name/slug list used by the homepage footer
  number-utils.ts             Number formatting and written-out results
public/                       Icons and placeholder images
styles/                       Extra global CSS (the app loads app/globals.css)
```

## Contributing

Issues and pull requests are welcome.

Known open items, left as future work:

- The homepage header search field (`Search for a conversion...`) is not wired. It has no state, change handler, or submit action. The category list search further down the page does filter categories.
- Footer and sitemap links go to `/about`, `/privacy`, `/terms`, and `/contact`, but those routes have no pages in `app/`.
- `npm run lint` is listed in `package.json`, but ESLint is not a dependency and there is no ESLint config.
- `AdBanner` renders placeholder "Ad Space" copy, not a live ad network.
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true`.
- `components/category-list.tsx` maps icons for `currency`, `data`, `scientific`, and `math`, which are not conversion categories. Several real slugs (for example `data-transfer`) fall back to a generic icon.
- `pnpm-lock.yaml` is a stub with no packages. Use npm and `package-lock.json`.

## License

MIT. See [LICENSE](LICENSE). Copyright 2026 Timchosen Uzua.
