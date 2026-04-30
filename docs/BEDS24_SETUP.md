# Beds24 widget setup pentru Serene Studio

Site-ul foloseste deja link direct Beds24 pe toate CTA-urile:

`https://beds24.com/booking.php?propid=249069&referer=...`

Acest link ramane fallback-ul principal pe mobil. Widgetul Beds24 se adauga doar daca este rapid si nu strica layoutul pe 360px.

## Ce trebuie generat in Beds24

1. Intra in contul Beds24.
2. Mergi la `Settings > Booking Engine > Booking Widgets`.
3. Alege `Booking Box` sau `Booking Strip`.
4. Selecteaza proprietatea Serene Studio, nu toate proprietatile.
5. Seteaza limba implicita si textele cat mai scurte.
6. La `Referrer`, foloseste una dintre valorile:
   - `website_book_widget`
   - `website_home_widget`
   - `website_en_book_widget`
7. Apasa `Refresh` pentru preview.
8. Apasa `Get Code`.
9. Copiaza codul complet generat.

## Unde se pune codul in Astro

Recomandare: creeaza un component nou:

`src/components/Beds24Widget.astro`

In el se pune snippetul Beds24 exact cum il da platforma. Apoi se importa in pagina:

`src/data/pages.ts` controleaza continutul paginii `/rezerva/`, dar snippetul real trebuie randat intr-un component Astro separat, nu lipit intr-un string din date.

## Cum testam dupa integrare

1. Ruleaza `npm run dev`.
2. Deschide `/rezerva/`.
3. Testeaza pe viewport 360x640.
4. Verifica:
   - nu apare overflow orizontal;
   - datele se pot selecta usor;
   - butonul Beds24 ramane utilizabil;
   - exista in continuare fallback `Deschide pagina Beds24`;
   - linkurile contin `referer=`.

## De evitat

- Nu face iframe-ul solutia principala pe mobil.
- Nu elimina linkul direct Beds24.
- Nu trimite utilizatorul spre Booking.com/Airbnb/Expedia.
- Nu cere formular pentru disponibilitate.

## Surse oficiale Beds24

- Booking widgets: https://beds24.com/booking-widgets.html
- Booking button: https://wiki.beds24.com/index.php/Booking_Button
- Embedded iframe: https://wiki.beds24.com/index.php/Embedded_Iframe
- Tracking bookings: https://wiki.beds24.com/index.php/Track_Bookings
