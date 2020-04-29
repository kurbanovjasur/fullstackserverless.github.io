(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(1),i=(t(0),t(184));const r={id:"auth1-01",title:"Authentication",sidebar_label:"Part I"},c={id:"auth1-01",title:"Authentication",description:"In this part, we will configure the authentication UI component from AWS Amplify, and in the next we will create it from scratch.",source:"@site/docs/auth1.01.md",permalink:"/docs/auth1-01",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/auth1.01.md",sidebar_label:"Part I",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/auth1-00"},next:{title:"Authentication",permalink:"/docs/auth1-02"}},o=[{value:"Create a new project \u269b\ufe0f",id:"create-a-new-project-\ufe0f",children:[]},{value:"Connect the icons \ud83d\udc7e",id:"connect-the-icons-",children:[]},{value:"Register your AWS account",id:"register-your-aws-account",children:[]},{value:"Initializing AWS Amplify in a React Native Project",id:"initializing-aws-amplify-in-a-react-native-project",children:[]},{value:"Connect the authentication plugin",id:"connect-the-authentication-plugin",children:[]},{value:"Connect AWS Amplify to React Native \u269b\ufe0f",id:"connect-aws-amplify-to-react-native-\ufe0f",children:[]},{value:"Editing the project structure",id:"editing-the-project-structure",children:[]},{value:"Minimum project configuration and Authenticator module",id:"minimum-project-configuration-and-authenticator-module",children:[]},{value:"Edit Inputs in App.js",id:"edit-inputs-in-appjs",children:[]},{value:"Change the theme of UI \ud83d\udd8c",id:"change-the-theme-of-ui-",children:[]},{value:"Connect localization",id:"connect-localization",children:[]},{value:"Done \u2705",id:"done-",children:[]}],l={rightToc:o};function p({components:e,...n}){return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this part, we will configure the authentication UI component from AWS Amplify, and in the next we will create it from scratch."),Object(i.b)("p",null,"All code for this part can be found on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-village/messaga/tree/Part1"}),"GitHub"),"."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/01.png",alt:"cognito"}))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth1-03.png",alt:"Cognito"}))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/01.png",alt:"Step01"}))),Object(i.b)("h2",{id:"create-a-new-project-\ufe0f"},"Create a new project \u269b\ufe0f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"react-native init auth\n")),Object(i.b)("p",null,"We start the project \ud83d\ude80"),Object(i.b)("p",null,"iOS"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd auth && react-native run-ios\n")),Object(i.b)("p",null,"Android"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd auth && react-native run-android\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/02.png",alt:"Step02"}))),Object(i.b)("h2",{id:"connect-the-icons-"},"Connect the icons \ud83d\udc7e"),Object(i.b)("p",null,"Since the icons are used by the AWS Amplify framework, we therefore connect them according to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/oblador/react-native-vector-icons#installation"}),"this")," instructions \ud83d\udcc3.\nCheck for errors."),Object(i.b)("p",null,"Add to App.js"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import Icon from \'react-native-vector-icons/FontAwesome5\'\n\nconst App = () => {\n  return (\n    <>\n      <Icon name="comments" size={30} color="#900" />\n    </>\n  )\n}\n')),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/03.png",alt:"Step03"}))),Object(i.b)("h2",{id:"register-your-aws-account"},"Register your AWS account"),Object(i.b)("p",null,"We register according to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/"}),"this")," instructions \ud83d\udcc3 and by the video tutorial \u0435\u043c we check all 5 steps."),Object(i.b)("h4",{id:"attention"},"Attention!!!"),Object(i.b)("p",null,"You need a bank card \ud83d\udcb3, where should be more than 1 $ \ud83d\udcb5"),Object(i.b)("p",null,"There we look and put the Amplify Command Line Interface (CLI)"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/04.png",alt:"Step04"}))),Object(i.b)("h2",{id:"initializing-aws-amplify-in-a-react-native-project"},"Initializing AWS Amplify in a React Native Project"),Object(i.b)("p",null,"Initialize our AWS Amplify project in the root directory of the React Native project."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify init\n")),Object(i.b)("p",null,"We answer the questions:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth02.png",alt:"amplify init"}))),Object(i.b)("p",null,"The project was initialized \ud83d\ude80"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/05.png",alt:"Step05"}))),Object(i.b)("h2",{id:"connect-the-authentication-plugin"},"Connect the authentication plugin"),Object(i.b)("p",null,"Now that the application is in the cloud, you can add some features, such as allowing users to register with our application and log in."),Object(i.b)("p",null,"We connect the authentication function. Select the default configuration. This adds auth resource configurations locally to your ampify/backend/auth directory"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify add auth\n")),Object(i.b)("div",{class:"alert alert--info",role:"alert"},"\ud83d\udccc Select the profile we want to use. default. Enter and how users will log in. Email (write off money for SMS)."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth03.png",alt:"amplify init"}))),Object(i.b)("p",null,"Submitting changes to the cloud \ud83d\udcad"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"amplify push\n")),Object(i.b)("p",null,"\u2714 All resources are updated in the cloud"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/06.png",alt:"Step06"}))),Object(i.b)("h2",{id:"connect-aws-amplify-to-react-native-\ufe0f"},"Connect AWS Amplify to React Native \u269b\ufe0f"),Object(i.b)("p",null,"Details in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/js/react"}),"this")," instructions \ud83d\udcc3, and briefly and in a straight line like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add aws-amplify @aws-amplify/core aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo\n")),Object(i.b)("p",null,"After installation, be sure to go to the ios folder and set the pods"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd ios && pod install && cd ..\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/07.png",alt:"Step07"}))),Object(i.b)("h2",{id:"editing-the-project-structure"},"Editing the project structure"),Object(i.b)("p",null,"Create the /src directory and transfer the App.js file there, renaming it to index.js"),Object(i.b)("p",null,"Edit import in /auth/index.js and hide future warnings."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { AppRegistry, YellowBox } from 'react-native'\nimport App from './src'\nimport { name as appName } from './app.json'\n\nYellowBox.ignoreWarnings([\n  'Warning: AsyncStorage',  \n  'Warning: componentWillReceiveProps',\n  'RCTRootView cancelTouches',\n  'not authenticated',\n  'Sending `onAnimatedValueUpdate`'\n])\n\n//window.LOG_LEVEL = 'DEBUG'\n\nAppRegistry.registerComponent(appName, () => App)\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/08.png",alt:"Step08"}))),Object(i.b)("h2",{id:"minimum-project-configuration-and-authenticator-module"},"Minimum project configuration and Authenticator module"),Object(i.b)("p",null,"Amplify.configure - project configuration"),Object(i.b)("p",null,"Authenticator - The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws-amplify.github.io/docs/js/authentication#using-components-in-react--react-native"}),"AWS Amplify Authentication")," provides authentication APIs and building blocks for developers who want to create user authentication capabilities."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport {StatusBar} from 'react-native'\nimport Amplify from '@aws-amplify/core'\nimport {Authenticator} from 'aws-amplify-react-native'\nimport awsconfig from '../aws-exports'\n\nAmplify.configure({\n  ...awsconfig,\n  Analytics: {\n    disabled: true,\n  },\n})\n\nconst App = () => {\n  return (\n    <>\n      <StatusBar barStyle=\"dark-content\" />\n      <Authenticator usernameAttributes=\"email\" />\n    </>\n  )\n}\n\nexport default App\n")),Object(i.b)("p",null,"We start the simulator, where we are met by the authentication UI component:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth04.png",alt:"Cognito"}))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/09.png",alt:"Step09"}))),Object(i.b)("h2",{id:"edit-inputs-in-appjs"},"Edit Inputs in App.js"),Object(i.b)("p",null,"To do this, add signUpConfig"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const signUpConfig = {\n  hideAllDefaults: true,\n  signUpFields: [\n    {\n      label: 'Email',\n      key: 'email',\n      required: true,\n      displayOrder: 1,\n      type: 'string',\n    },\n    {\n      label: 'Password',\n      key: 'password',\n      required: true,\n      displayOrder: 2,\n      type: 'password',\n    },\n  ],\n}\n\n\n<Authenticator\n   usernameAttributes=\"email\"\n   signUpConfig={signUpConfig}\n/>\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/10.png",alt:"Step10"}))),Object(i.b)("h2",{id:"change-the-theme-of-ui-"},"Change the theme of UI \ud83d\udd8c"),Object(i.b)("p",null,"We create an export point for our future components /src/components/index.js with the content"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export * from './AmplifyTheme'\n")),Object(i.b)("p",null,"and accordingly create the /src/components/AmplifyTheme/index.js theme file itself with the content"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { StyleSheet } from 'react-native'\n\nexport const deepSquidInk = '#152939'\nexport const linkUnderlayColor = '#FFF'\nexport const errorIconColor = '#30d0fe'\n\nconst AmplifyTheme = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'space-around',\n    paddingTop: 20,\n    width: '100%',\n    backgroundColor: '#FFF'\n  },\n  section: {\n    flex: 1,\n    width: '100%',\n    padding: 30\n  },\n  sectionHeader: {\n    width: '100%',\n    marginBottom: 32\n  },\n  sectionHeaderText: {\n    color: deepSquidInk,\n    fontSize: 20,\n    fontWeight: '500'\n  },\n  sectionFooter: {\n    width: '100%',\n    padding: 10,\n    flexDirection: 'row',\n    justifyContent: 'space-between',\n    marginTop: 15,\n    marginBottom: 20\n  },\n  sectionFooterLink: {\n    fontSize: 14,\n    color: '#30d0fe',\n    alignItems: 'baseline',\n    textAlign: 'center'\n  },\n  navBar: {\n    marginTop: 35,\n    padding: 15,\n    flexDirection: 'row',\n    justifyContent: 'flex-end',\n    alignItems: 'center'\n  },\n  navButton: {\n    marginLeft: 12,\n    borderRadius: 4\n  },\n  cell: {\n    flex: 1,\n    width: '50%'\n  },\n  errorRow: {\n    flexDirection: 'row',\n    justifyContent: 'center'\n  },\n  errorRowText: {\n    marginLeft: 10\n  },\n  photo: {\n    width: '100%'\n  },\n  album: {\n    width: '100%'\n  },\n  button: {\n    backgroundColor: '#30d0fe',\n    alignItems: 'center',\n    padding: 16\n  },\n  buttonDisabled: {\n    backgroundColor: '#85E4FF',\n    alignItems: 'center',\n    padding: 16\n  },\n  buttonText: {\n    color: '#fff',\n    fontSize: 14,\n    fontWeight: '600'\n  },\n  formField: {\n    marginBottom: 22\n  },\n  input: {\n    padding: 16,\n    borderWidth: 1,\n    borderRadius: 3,\n    borderColor: '#C4C4C4'\n  },\n  inputLabel: {\n    marginBottom: 8\n  },\n  phoneContainer: {\n    display: 'flex',\n    flexDirection: 'row',\n    alignItems: 'center'\n  },\n  phoneInput: {\n    flex: 2,\n    padding: 16,\n    borderWidth: 1,\n    borderRadius: 3,\n    borderColor: '#C4C4C4'\n  },\n  picker: {\n    flex: 1,\n    height: 44\n  },\n  pickerItem: {\n    height: 44\n  }\n})\n\nexport { AmplifyTheme }\n")),Object(i.b)("p",null,"And plug the theme into the Authenticator src/index.js component"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {AmplifyTheme} from './components'\n\n<Authenticator\n  usernameAttributes=\"email\"\n  signUpConfig={signUpConfig}\n  theme={AmplifyTheme}\n/>\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth05.png",alt:"AmplifyTheme"}))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/steps/11.png",alt:"Step11"}))),Object(i.b)("h2",{id:"connect-localization"},"Connect localization"),Object(i.b)("p",null,"In our case, the Russian language \ud83c\uddf7\ud83c\uddfa"),Object(i.b)("p",null,"Add export to /src/components/index.js"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"export * from './Localei18n'\n")),Object(i.b)("p",null,"Create the file /src/components/Localei18n/index.js with the contents"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { NativeModules, Platform } from 'react-native'\nimport { I18n } from '@aws-amplify/core'\n\nlet langRegionLocale = 'en_US'\n\n// If we have an Android phone\nif (Platform.OS === 'android') {\n  langRegionLocale = NativeModules.I18nManager.localeIdentifier || ''\n} else if (Platform.OS === 'ios') {\n  langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || ''\n}\n\nconst authScreenLabels = {\n  en: {\n    'Sign Up': 'Create new account',\n    'Sign Up Account': 'Create a new account'\n  },\n  ru: {\n    'Sign Up': '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442',\n    'Forgot Password': '\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?',\n    'Sign In Account': '\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443',\n    'Enter your email': '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email',\n    'Enter your password': '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c',\n    Password: '\u041f\u0430\u0440\u043e\u043b\u044c',\n    'Sign In': '\u0412\u0445\u043e\u0434',\n    'Please Sign In / Sign Up': '\u0412\u043e\u0439\u0442\u0438 / \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442',\n    'Sign in to your account': '\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442',\n    'Create a new account': 'C\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442',\n    'Confirm a Code': '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043a\u043e\u0434',\n    'Confirm Sign Up': '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e',\n    'Resend code': '\u0415\u0449\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434',\n    'Back to Sign In': '\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0432\u0445\u043e\u0434\u0443',\n    Confirm: '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c',\n    'Confirmation Code': '\u041a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f',\n    'Sign Out': '\u0412\u044b\u0445\u043e\u0434'\n  }\n}\n\n// \"en_US\" -> \"en\", \"es_CL\" -> \"es\", etc\nconst languageLocale = langRegionLocale.substring(0, 2)\nI18n.setLanguage(languageLocale)\nI18n.putVocabularies(authScreenLabels)\n\nconst Localei18n = () => null\n\nexport { Localei18n }\n")),Object(i.b)("p",null,"And we connect the Localei18n component in src/index.js"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n   AmplifyTheme,\n   Localei18n\n} from './components'\n\n\n<Localei18n />\n<Authenticator\n  usernameAttributes=\"email\"\n  signUpConfig={signUpConfig}\n  theme={AmplifyTheme}\n/>\n")),Object(i.b)("p",null,"We start the project, where we see that localization has not yet been applied. Therefore, we change the language into Russian in the settings of our simulator"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/auth/auth06.png",alt:"Localei18n"}))),Object(i.b)("h2",{id:"done-"},"Done \u2705"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=34467235"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"/img/logo/patreon.png",alt:"Become a Patron!"})))))}p.isMDXComponent=!0},184:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},b=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||r;return t?i.a.createElement(d,o({ref:n},p,{components:t})):i.a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<r;p++)c[p]=t[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);