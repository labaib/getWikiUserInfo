# getWikiUserInfo
Funzione per l'ottenimento delle informazioni utente da sessione Wikidata


## Importazione


### CDN

jsDelivr serve automaticamente i file GitHub con il tipo MIME `application/javascript`, l'URL segue il formato `https://cdn.jsdelivr.net/gh/<user>/<repo>@<branch>/<file>`

```
import { getWikiUserInfo } from 'https://cdn.jsdelivr.net/gh/labaib/getWikiUserInfo@main/index.js';
```

> Pro: aggiornamento automatico; Contro: pagina carica più lentamente 

### Download locale

Il file può essere scaricato localmente e caricato insieme agli altri file JavaScript
```
import { getWikiUserInfo } from './js/getWikiUserInfo.js';
```

> Pro: più veloce; Contro: aggiornamento manuale 


## Esempi

```
<script type="module">
        
 import { getWikiUserInfo } from 'https://cdn.jsdelivr.net/gh/labaib/getWikiUserInfo@main/index.js';

 (async () => {
     const info = await getWikiUserInfo("www.wikidata.org");
 })();

</script>
```
```
<script type="module">
        
  import { getWikiUserInfo } from './js/getWikiUserInfo.js';

  (async () => {
    const info = await getWikiUserInfo("www.wikidata.org");
  })();

</script>
```


