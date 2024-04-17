// (function (global, factory) {
//   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
//   typeof define === 'function' && define.amd ? define(factory) :
//   (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.config = factory());
// })(this, (function () { 'use strict';

//   const configQueryMap={"navbar-vertical-collapsed":"phoenixIsNavbarVerticalCollapsed","color-scheme":"phoenixTheme","navigation-type":"phoenixNavbarPosition","vertical-navbar-appearance":"phoenixNavbarVerticalStyle","horizontal-navbar-shape":"phoenixNavbarTopShape","horizontal-navbar-appearance":"phoenixNavbarTopStyle"},initialConfig={phoenixIsNavbarVerticalCollapsed:!1,phoenixTheme:"light",phoenixNavbarTopStyle:"default",phoenixNavbarVerticalStyle:"default",phoenixNavbarPosition:"vertical",phoenixNavbarTopShape:"default",phoenixIsRTL:!1,phoenixSupportChat:!0},CONFIG={...initialConfig},setConfig=(e,a=!0)=>{Object.keys(e).forEach((t=>{CONFIG[t]=e[t],a&&localStorage.setItem(t,e[t]);}));},resetConfig=()=>{Object.keys(initialConfig).forEach((e=>{CONFIG[e]=initialConfig[e],localStorage.setItem(e,initialConfig[e]);}));},urlSearchParams=new URLSearchParams(window.location.search),params=Object.fromEntries(urlSearchParams.entries());Object.keys(params).length>0&&Object.keys(params).includes("theme-control")&&(resetConfig(),Object.keys(params).forEach((e=>{configQueryMap[e]&&localStorage.setItem(configQueryMap[e],params[e]);}))),Object.keys(CONFIG).forEach((e=>{if(null===localStorage.getItem(e))localStorage.setItem(e,CONFIG[e]);else try{setConfig({[e]:JSON.parse(localStorage.getItem(e))});}catch{setConfig({[e]:localStorage.getItem(e)});}})),JSON.parse(localStorage.getItem("phoenixIsNavbarVerticalCollapsed"))&&document.documentElement.classList.add("navbar-vertical-collapsed"),"dark"===localStorage.getItem("phoenixTheme")?document.documentElement.setAttribute("data-bs-theme","dark"):"auto"===localStorage.getItem("phoenixTheme")&&document.documentElement.setAttribute("data-bs-theme",window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),"horizontal"===localStorage.getItem("phoenixNavbarPosition")&&document.documentElement.setAttribute("data-navigation-type","horizontal"),"combo"===localStorage.getItem("phoenixNavbarPosition")&&document.documentElement.setAttribute("data-navigation-type","combo");var config = {config:CONFIG,reset:resetConfig,set:setConfig};

//   return config;

// }));
// //# sourceMappingURL=config.js.map 

(function (global, factory) {
  // Vérifie si le module est exécuté dans un environnement de module ou un navigateur traditionnel
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  // Si aucun des cas ci-dessus n'est vrai, assigne le résultat de factory à la variable globale 'config'
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.config = factory());
})(this, (function () { // Fonction factory qui retourne l'objet de configuration

  'use strict';

  // Mapping des paramètres de configuration à leurs noms correspondants dans l'URL de requête
  const configQueryMap = {
    "navbar-vertical-collapsed": "phoenixIsNavbarVerticalCollapsed",
    "color-scheme": "phoenixTheme",
    "navigation-type": "phoenixNavbarPosition",
    "vertical-navbar-appearance": "phoenixNavbarVerticalStyle",
    "horizontal-navbar-shape": "phoenixNavbarTopShape",
    "horizontal-navbar-appearance": "phoenixNavbarTopStyle"
  };

  // Configuration initiale par défaut
  const initialConfig = {
    phoenixIsNavbarVerticalCollapsed: false,
    phoenixTheme: "light",
    phoenixNavbarTopStyle: "default",
    phoenixNavbarVerticalStyle: "default",
    phoenixNavbarPosition: "vertical",
    phoenixNavbarTopShape: "default",
    phoenixIsRTL: false,
    phoenixSupportChat: true
  };

  // Copie de la configuration initiale pour être modifiée par la suite
  const CONFIG = { ...initialConfig };

  // Fonction pour mettre à jour la configuration
  const setConfig = (configObject, saveToLocal = true) => {
    Object.keys(configObject).forEach((key) => {
      CONFIG[key] = configObject[key]; // Met à jour la valeur de la clé correspondante dans la configuration
      if (saveToLocal) {
        localStorage.setItem(key, JSON.stringify(configObject[key])); // Enregistre la valeur mise à jour dans le stockage local
      }
    });
  };

  // Fonction pour réinitialiser la configuration
  const resetConfig = () => {
    Object.keys(initialConfig).forEach((key) => {
      CONFIG[key] = initialConfig[key]; // Rétablit la configuration initiale par défaut
      localStorage.setItem(key, JSON.stringify(initialConfig[key])); // Enregistre la valeur initiale dans le stockage local
    });
  };

  // Extrait les paramètres de l'URL de requête et les stocke dans un objet params
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  // Si des paramètres sont spécifiés dans l'URL de requête, réinitialise la configuration en fonction de ces paramètres
  if (Object.keys(params).length > 0 && Object.keys(params).includes("theme-control")) {
    resetConfig(); // Réinitialise la configuration
    Object.keys(params).forEach((param) => {
      if (configQueryMap[param]) {
        localStorage.setItem(configQueryMap[param], params[param]); // Enregistre les paramètres dans le stockage local
      }
    });
  }

  // Initialise la configuration à partir du stockage local
  Object.keys(CONFIG).forEach((key) => {
    const storedValue = localStorage.getItem(key); // Récupère la valeur correspondante du stockage local
    if (storedValue !== null) {
      try {
        setConfig({ [key]: JSON.parse(storedValue) }, false); // Met à jour la configuration en utilisant la valeur récupérée
      } catch {
        setConfig({ [key]: storedValue }, false); // Met à jour la configuration en utilisant la valeur récupérée
      }
    }
  });

  // Applique les ajustements visuels en fonction de la configuration actuelle
  if (JSON.parse(localStorage.getItem("phoenixIsNavbarVerticalCollapsed"))) {
    document.documentElement.classList.add("navbar-vertical-collapsed");
  }

  if (localStorage.getItem("phoenixTheme") === "dark") {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else if (localStorage.getItem("phoenixTheme") === "auto") {
    document.documentElement.setAttribute("data-bs-theme", window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  if (localStorage.getItem("phoenixNavbarPosition") === "horizontal") {
    document.documentElement.setAttribute("data-navigation-type", "horizontal");
  } else if (localStorage.getItem("phoenixNavbarPosition") === "combo") {
    document.documentElement.setAttribute("data-navigation-type", "combo");
  }

  // Objet de configuration exporté
  var config = { config: CONFIG, reset: resetConfig, set: setConfig };

  return config; // Retourne l'objet de configuration
}));
