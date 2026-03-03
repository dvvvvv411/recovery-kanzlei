

## Plan: Telefonnummer in der Datenbank aktualisieren

Die Telefonnummer wird zentral in der Supabase `settings`-Tabelle gespeichert und von dort auf der gesamten Website angezeigt. Der aktuelle Wert ist `089 41613320` -- er muss auf `06131-6365850` geändert werden.

### Aktion

Ein einzelnes SQL-Update in der `settings`-Tabelle:

```sql
UPDATE settings SET value = '06131-6365850' WHERE key = 'phone';
```

Das war's. Alle Seiten (Kontakt, Footer, Impressum, Blog-Posts, E-Mails) lesen die Nummer dynamisch aus dieser Tabelle -- nach dem Update wird überall `06131-6365850` angezeigt.

