const API = 'http://localhost:3000';

const User = '/user';
const Milestone = '/milestone';

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
    getUsers: `${API}${User}`,
    getMilestones: `${API}${Milestone}`,
    getByWeek: `${API}${Milestone}/byWeek`
  }
};

export default Paths;
