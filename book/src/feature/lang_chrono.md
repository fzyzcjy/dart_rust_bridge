# chrono

Codegen optionally support [chrono crate](https://docs.rs/chrono) with feature `chrono`.

| :crab: Rust       | :dart: Dart                 |
| ----------------- | --------------------------- |
| `DateTime<Utc>`   | `DateTime` _utc_            |
| `DateTime<Local>` | `DateTime` _local timezone_ |
| `NaiveDateTime`   | `DateTime` _utc assumed_    |
| `Duration`        | `Duration`                  |

:warning: Please note that:

- on native platforms, _microseconds_ unit is used.
- on web platform, _milliseconds_ unit is used (due to JS limitation with dates).

:bulb: Also a `DateTime<Local>` will always be translated into local time of the device, which might not be what you want if you expect them to be sent _as-is_.

> In that case, you could implement it in your codebase by sending a `u32` (timezone offset) alongside the `i64` (timestamp) over the wire, or open a issue / PR here to further discuss it. The reason why this choice was originally made is to have all `DateTime<Utc>`, `DateTime<Local>` and `NaiveDateTime` been represented by a single `i64`.
