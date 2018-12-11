const API = 'http://localhost:3000';

const User = '/user';

const Paths = {
  Links: {
    Landing: "/landing",
    Login: "/login",
    Milestones: "/milestones",
    Profile: "/profile",
    Search: "/search",
    SignUp: "/signup",
    App: "/"
  },
  Api: {
    Login: `${API}${User}/log`,
    Users: `${API}${User}`
  }
};

export default Paths;
