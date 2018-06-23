# 3h-time

A time formatter.

# Install

```
npm i 3h-time
```

# APIs

## Time.format(date: Date, format: string): string

Format the given date.

## Time.get(format: string):string

Equal to `Time.format(new Date(), format)`.

## Time.replacers: { [id: string]: (date: Date) => string; }

A replacer map.

# Replace map

- `YYYY` - Full year.
- `YY` - Short year.
- `MMMM` - Full month name.
- `MMM` - Short month name.
- `MM` - Month number with leading zero.
- `M` - Month number without leading zero.
- `DD` - Date number with leading zero.
- `D` - Date number without leading zero.
- `dd` - Date number with st/nd/rd/th and leading zero.
- `d` - Date number with st/nd/rd/th but without leading zero.
- `HH` - Hour(0-23) with leading zero.
- `H` - Hour(0-23) without leading zero.
- `hh` - Hour(0-11) with leading zero.
- `h` - Hour(0-11) without leading zero.
- `mm` - Minutes with leading zero.
- `m` - Minutes without leading zero.
- `SS` - Seconds with leading zero.
- `S` - Seconds without leading zero.
- `sss` - Full milliseconds with leading zero.
- `ss` - Shorter milliseconds.
- `s` - Shortest milliseconds.
- `WW` - Full day name.
- `W` - Short day name.
- `ww` - Full day number.
- `w` - Short day number.
- `A` - AM/PM.
- `a` - am/pm.

# Examples

Just run `npm test` in the package folder to get the examples.

# Changelog

See [CHANGELOG.md](Changelog.md).
