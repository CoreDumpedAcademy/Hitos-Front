const API = 'http://localhost:3000';
//const API = 'https://www.milestones-mgt.coredumped.es'

const User = '/user';
const Milestone = '/milestone';
const APIEnumerator = '/enum';

const Paths = {
  Links: {
    Milestones: "/milestones",
    Profile: "/profile",
    Search: "/search",
    SignUp: "/signup",
    Login: "/",
    CreatingMillestone: '/creatingmilestone'
  },
  Api: {
    Login: `${API}${User}/log`,
    getUsers: `${API}${User}`,
    getMilestones: `${API}${Milestone}`,
    getByWeek: `${API}${Milestone}/byWeek`,
    getApiEnumerator: `${API}${APIEnumerator}`,
    getByName: `${API}${User}/byName`,
    getMsByCategory: `${API}${Milestone}/byCategory`,
  },
  URL: API
};

export default Paths;
