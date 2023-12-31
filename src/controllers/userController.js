import {userQuery} from '../queries/useQuery.js'

export const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await userQuery.getAllUsers();

      return res.status(200).json(users)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async getAdmInformation(req, res) {
    try {
      const AdmInformation = await userQuery.getAdminInformation();

      return res.status(200).json(AdmInformation)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async getAllScore(req, res) {
    try {
      const scores = await userQuery.getAllScores();

      return res.status(200).json(scores)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async createTeam(req, res) {
    try {
      const teamData = req.body;
      const { teamName } = teamData;
      const teams = await userQuery.createTeams(teamName);

      return res.status(200).json(teams)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async getTeams(req, res) {
    try {
      const teams = await userQuery.getTeams();

      return res.status(200).json(teams)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async updateScore(req, res) {
    try {
      const scoreData = req.body;
      const updateScore = await userQuery.updateScore(scoreData);

      return res.status(200).json(updateScore)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = userQuery.createUser(userData);
      return res.status(200).json(newUser)
    } catch (error) {
      res.status(500).json(error)
      console.log(error)
    }
  },
  async updateAdmInformation(req, res) {
    try {
      const admData = req.body;
      const [newData] = admData.map((item) => {
        return Object.values(item);
      })
      newData.shift()
      const newAdmInformation = userQuery.createAdmInformations(newData);
      return res.status(200).json(newAdmInformation)
    } catch (error) {
      res.status(500).json(error)
      console.log(error)
    }
  },
  async createScore(req, res) {
    try {
      const scoreData = req.body;
      const newData = scoreData.map((data) => [data.team_one, data.team_two])
      const newScore = userQuery.createScore(newData);
      return res.status(200).json(newScore)
    } catch (error) {
      res.status(500).json(error)
      console.log(error)
    }
  },
  async deleteUsersAndScores(req, res) {
    try {
      const result = await userQuery.deleteUsersAndScore();

      if(result.afectedRows > 0){
        return res.status(200).json({ success: true, message: 'Registros excluídos com sucesso.' });
      }
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async setResult(req, res) {
    try {
      await userQuery.setResult();

      return res.status(200).json('messsage: is true')
    } catch (error) {
      res.status(500).json(error)
    }
  },
  async removeResult(req, res) {
    try {
      await userQuery.removeResult();

      return res.status(200).json('Message: is false')
    } catch (error) {
      res.status(500).json(error)
    }
  },
}