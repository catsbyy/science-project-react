import Footer from "../components/footer/Footer.js";
import {Login} from "./Login.js";
import Home from "./Home.js";
import Students from "./Students.js";
import Business from "./Business.js";
import Student from "./Student.js";
import SuccessfulRegistration from "./SuccessfulRegistration.js";
import Results from "./Results.js";
import Account from "./Account.js";

export const nav = [
     { path:     "/",         name: "Головна",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/login",    name: "Увійти",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/students",  name: "Кандидату",     element: <Students />,    isMenu: true,     isPrivate: true  },
     { path:     "/student/:id",  name: "Роботодавцю",     element: <Student />,    isMenu: false,     isPrivate: true  },
     { path:     "/business",  name: "Роботодавцю",     element: <Business />,    isMenu: true,     isPrivate: true  },
     { path:     "/success",  name: "Кандидату",     element: <SuccessfulRegistration />,    isMenu: false,     isPrivate: true  },
     { path:     "/results",  name: "Роботодавцю",     element: <Results />,    isMenu: false,     isPrivate: true  },
     { path:     "/account",  name: "Профіль",     element: <Account />,    isMenu: true,     isPrivate: true  },
];
