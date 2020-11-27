## TOD0S

- [x] Components dir in icindekileri siniflandir.
- [ ] refactor sort&search comps
  - [ ] chip filter
  - [ ] layout serach bar
- [ ] compare func utils olarak ayir.
- [x] Detay popupin yerini degistir [issue#4](#4)
- [ ] Detay popupin statelerin iliskisininin arastir.

### STYLES TOD0S

- [ ] Jumbotron company pic.
  - [x] kenarlardaki beyaz alanin yok edilmesi lazim.
  - [ ] pic css calismiyor.
- [ ] switch size buyut.
- [ ] filter chip i degistir.
- [ ] Card height fixle esit gorunsen. Buttonlar en altina gelsin.
- [ ] sort and search componenti yazinini guzellestir.
- [ ] Search a buyutec symbolu koy. Like icin kalp
- [ ] Satin al sayaci ekle.

## HOW TO RUN

`yarn install` install all dependecies.\
`yarn start` runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
There is some problem with some browser. [issue#3](#3)

## ISSUES

### #1

**prob:** GET API_URL net::ERR_BLOCKED_BY_CLIENT.
**sol:** adblock i kapatinca cozuldu.

### #2

**prob:** Node-sass@5 asagidaki hatayi veriyor. 4.14 ve daha dusuk surumler [linkteki](https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0) hatayi veriyor.

**sol:** tekrar dene. 2,3 saat sonra cozuldu.

### #3

**prob:** Chromium browser daki goruntu nedeni bilmedigim bir sekilde bozuldu.

**obs:** Arama yaptigimda duzeliyor. Yani searchbar submit oldugunda veya `http://localhost:3000/?search=` url sinde her sey normal gorunuyor.

**sol:** ?

### #4

**prob:** CardContainer yuklenirken tum (gosterilmeyenler dahil) basiliyor. Basilmamasi gerekiyor.

**sol:** ?
