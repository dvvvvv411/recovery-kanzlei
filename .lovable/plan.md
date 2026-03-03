

## Plan: Domain/Mail, Telefonnummer, Wallet-Card und Copyright aktualisieren

### 1. Domain `bovensiepen-partner.de` -> `bovensiepen-kanzlei.de` (13 Dateien)

Globaler Suchen-und-Ersetzen in allen betroffenen Dateien:

| Datei | Vorkommen |
|-------|-----------|
| `src/components/Footer.tsx` | 1x (info@) |
| `src/pages/Kontakt.tsx` | 2x (mailto + Anzeige) |
| `src/pages/Impressum.tsx` | 1x |
| `src/pages/Datenschutz.tsx` | 2x (info@ + datenschutz@) |
| `src/pages/Haftungsausschluss.tsx` | 1x |
| `src/pages/AGB.tsx` | 1x |
| `src/pages/BlogPost.tsx` | 2x |
| `src/pages/BlogPostCeoFraud.tsx` | 2x |
| `src/pages/BlogPostKreditgebuehr.tsx` | 3x |
| `src/pages/BlogPostImmobilienrecht.tsx` | 1x |
| `src/pages/BlogPostProzessfuehrung.tsx` | 1x |
| `src/pages/BlogPostPrivateClients.tsx` | 1x |
| `supabase/functions/send-confirmation-email/index.ts` | 3x |

### 2. Telefonnummer zu `06131-6365850`

Die Telefonnummer wird in der Supabase `settings`-Tabelle gespeichert. Der aktuelle Wert muss per SQL UPDATE auf `06131-6365850` geändert werden.

### 3. Wallet-Card entfernen aus `/kontakt`

In `src/pages/Kontakt.tsx`:
- Die `copyWalletAddress`-Funktion entfernen (Zeilen ~307-320)
- Die Wallet-Card Button entfernen (Zeilen ~476-492)
- Den `Wallet`-Import aus lucide-react entfernen

### 4. Copyright 2025 -> 2026

In `src/components/Footer.tsx` Zeile 108: `© 2025` zu `© 2026` ändern.

---

**Zusammenfassung:** 14 Dateien werden bearbeitet, 1 Datenbank-Update wird ausgeführt.

