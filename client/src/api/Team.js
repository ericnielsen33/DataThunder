import axios from "axios";
const TEAM_URL = "http://localhost:5000/api/teams";
const headers = {
    "Authorization": localStorage.getItem("token")
};

export async function postNewTeam(teamName) {
    const response = await axios.post(TEAM_URL, {team: {teamName}},{headers})
    const team = response.data.team
    return team;
}