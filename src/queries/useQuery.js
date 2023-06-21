import {pool} from '../db/index.js'

export const userQuery = {
  async getAllUsers(){
    try {
      const connection = await pool.getConnection();
      const query = 'SELECT * From user';

      const [rows] = await connection.query(query)
      
      connection.release();

      return rows;
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      throw error;      
    }
  },
  async getAdminInformation(){
    try {
      const connection = await pool.getConnection();
      const query = 'SELECT * From admin_information';

      const [rows] = await connection.query(query)
      
      connection.release();

      return rows;
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      throw error;      
    }
  },
  async getAllScores(){
    try {
      const connection = await pool.getConnection();
      const query = 'SELECT * From score';

      const [rows] = await connection.query(query)
      
      connection.release();

      return rows;
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      throw error;      
    }
  },
  async createScore(scoreData){
    try {
      const connection = await pool.getConnection();
      const query = 'INSERT INTO score (team_one, team_two, result) VALUES ?';

      const [rows] = await connection.query(query, [scoreData])   
      connection.release();
      return rows;
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      throw error;      
    }
  },
  async createUser({name, bets}){
    try {
      const connection = await pool.getConnection();
      const query = 'INSERT INTO user (name, bet) VALUES (?, ?)';
      const serializedBets = JSON.stringify(bets);
      const [rows] = await connection.query(query, [name, serializedBets])
      connection.release();   
      return rows;
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      throw error;      
    }
  },
  async createAdmInformations(AdmData){
    try {
      const connection = await pool.getConnection();
      const query = `UPDATE admin_information SET 
        second_prize_percentage = ?,
        first_prize_percentage = ?,
        expenses_percentage = ?,
        pool_admin_percentage = ?,
        correct_score = ?,
        completely_wrong_score = ?,
        partially_wrong_score = ?,
        draw_score = ?
        WHERE id = 1`;
      
      const [rows] = await connection.query(query, AdmData);
      connection.release();
      return rows;
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      throw error;
    }
  },
  async deleteUsersAndScore(){
    try {
      const connection = await pool.getConnection();
      
      const deleteUsersQuery = 'DELETE FROM user';
      await connection.query(deleteUsersQuery);
      
      const deleteScoresQuery = 'DELETE FROM score';
      await connection.query(deleteScoresQuery);
      
      connection.release();

      return rows;
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      throw error;      
    }
  },
}