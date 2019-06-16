### LOGIN WITH STRAPI FOR HYP SITE

Per la versione Italiana clicca **[QUI](https://github.com/lomba1992/loginWithStrapi/blob/master/LEGGIMI.md)**

**HYP** is the prototype of a web app that aims to improve communication between students and the school..

Site's link: [HYP](https://happy-beaver-hyp.netlify.com/) <br/>
Repository's link: [GitHub-Hyp](https://github.com/icate95/HYP2)

In this documentation I will illustrate the realization of the ** login component **.

#

### USED TECHNOLOGY

For the development of this project it was decided to use **[REACT] (https://reactjs.org/)** for the frontend part and **[STRAPI] (https://strapi.io/documentation/3.0.0-beta.x/)** for the backend part.

#

### START 

Create a folder and follow the steps:

* Install **REACT**:
  ```

  npx create-react-app [nome dell'app]
  cd my-app
  npm start

  ```
  _for more details https://reactjs.org/_
  
  
 Use the style of this component, you must also install the library inside the ** React ** folder **[Node-SASS](https://www.npmjs.com/package/node-sass)**

  ```

  npm install node-sass

  ```
  
  
  
* Install **STRAPI**:
  
  ``` 
  
   npm install strapi@beta -g
  
  ```
  then create the new database
  
  ```
  
  strapi new cms --quickstart
  
  ```
  
  _for more details https://strapi.io/_
  
   For call to API **STRAPI** recommends installing the following plugin to install in the **REACT**

   ```

   npm i axios

   ```
  
 
 
  
If both steps are successful you are ready to download and configure the component that will take care of **Login**.

### CONFIGURE THE LOGIN COMPONENT

Once you have downloaded this Git, insert the **Login.jsx** and **Login.scss** files into the React folder inside src and then overwrite the **index.js** file.

To make sure that everything works we still need to make **two changes**

* Enter the ** Strapi ** backend and enter **Roles and Permission**> **Authenticated**> scroll the page, open the **Users Permission** curtain and enter the following fields in the Auth field.

* As a second step you need to replace the url with that of your database created in strapi (with ctrl + F look for the following word '[InsertUrlStrapi]').


**Once all these steps are done, everything will be ready. (Inside the file you will find comments explaining the functions)**

#### ENJOY YOURSELF!!!
