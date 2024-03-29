### LOGIN WITH STRAPI FOR HYP SITE

For English version click **[HERE](https://github.com/lomba1992/loginWithStrapi/blob/master/README.md)**

![HYP](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/login.png)

**HYP** è il prototipo di una web app che ha come obiettivo di migliorare la comunicazione tra gli studenti e la scuola.

Link al sito: [HYP](https://happy-beaver-hyp.netlify.com/) <br/>
Link al repository: [GitHub-Hyp](https://github.com/icate95/HYP2)

In questa documentazione illustrerò la realizzazione del **componente di login**.

#

### TECNOLOGIA USATA

Per lo svilluppo di questo progetto è stata deciso di utilizzare **[REACT](https://reactjs.org/)** per la parte di frontend e **[STRAPI](https://strapi.io/documentation/3.0.0-beta.x/)** per la parte di backend.

#

### PER INIZIARE 

Dentro una cartella eseguire i seguenti passaggi:

* Installare **REACT**:
  ```

  npx create-react-app [nome dell'app]
  cd my-app
  npm start

  ```
  _per maggiori informazioni andare su https://reactjs.org/_
  
  
  Per utilizzare lo stile di questo componente dovete installare all'interno della cartella di **React** anche la librearia **[Node-SASS](https://www.npmjs.com/package/node-sass)**

  ```

  npm install node-sass

  ```
  
  
  
* Installare **STRAPI**:
  
  ``` 
  
   npm install strapi@beta -g
  
  ```
  successivamente creare il nuovo database
  
  ```
  
  strapi new cms --quickstart
  
  ```
  
  _per maggiori informazioni andare su https://strapi.io/_
  
   Per le chiamate alle API **STRAPI** consiglia di installare il seguente plugin da installare all'interno della cartella di        **REACT**

   ```

   npm i axios

   ```
  
 
 
  
Se entrambi i passaggi sono andati a buon fine sei pronto per scaricare e configurare il componente che si occuperà del **Login**.

### CONFIGURARE IL COMPONENTE DI LOGIN

Una volta scaricato questo Git inserisci i file **Login.jsx** e **Login.scss** all'interno della cartella di React dentro src e successivamente sovrascrivere il file **index.js**.

![folder](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/folder.png)

Per far si che il tutto funzioni dobbiamo apportare ancora **due modifiche**

* Entrare nel backend di **Strapi** ed entrare in **Roles and Permission** > **Authenticated** > scrollare tutta la pagina, aprire la tenda **Users Permission** e inserire nel campo Auth i seguenti campi.<br/>
  ![role](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/role.png)<br/> > ![Auth](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/authenticated.png) > ![User](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/userPermission.png) e clicca i file interessati ![Check](https://github.com/lomba1992/loginWithStrapi/blob/master/schermata/check.png)

* Come seconda fase devi sostituire gli url con  quello del tuo database creato in strapi (con ctrl + F cerca la seguente parola '[InsertUrlStrapi]').


**Una volta eseguito tutti questi passaggi sarà tutto pronto. (All'interno del file troverai dei commenti che spiegano l'utilità delle funzioni interne ai file)**

#### Buon Divertimento!!!
  
