import {pool} from '../db.js'

export const getAvion = async (req, res) => {
   try {
      const [rows] = await pool.query('SELECT * FROM avion')
      res.json(rows);
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};

export const getAvionById = async (req, res) => {
   try {
      const [rows] = await pool.query('SELECT * FROM avion WHERE id = ?',[req.params.id])
      if(rows.length <= 0) return res.status(404).json({
         message: 'avion no found'
      });
      res.json(rows[0])
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};

export const createAvion = async (req, res) => {
   const {numPlaca,color,marca,modelo,capacidadMax,numeroMotores,maximaPresion} = req.body;
   try {
      const [rows] = await pool.query('INSERT INTO avion (numPlaca, color, marca, modelo, capacidadMax, numeroMotores, maximaPresion) VALUES (?,?,?,?,?,?,?)',[numPlaca,color,marca ,modelo,capacidadMax,numeroMotores,maximaPresion]);
      res.send({
         id: rows.insertId,
         numPlaca,
         color,
         marca,
         modelo,
         capacidadMax,
         numeroMotores,
         maximaPresion
      });
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};

export const updateAvion = async (req, res) => {
   const {id} = req.params;
   const {numPlaca,color,marca ,modelo,capacidadMax,numeroMotores,maximaPresion} = req.body;
   try {
      const [result] = await pool.query(
         'UPDATE avion SET numPlaca = IFNULL(?,numPlaca), color = IFNULL(?,color),marca = IFNULL(?,marca),modelo = IFNULL(?,modelo),capacidadMax = IFNULL(?,capacidadMax),numeroMotores = IFNULL(?,numeroMotores),maximaPresion = IFNULL(?,maximaPresion) WHERE id = ?',[numPlaca,color,marca ,modelo,capacidadMax,numeroMotores,maximaPresion,id]);
      if(result.affectedRows === 0) return res.status(404).json({
         message: 'avion no found'
      });
      const [rows] = await pool.query('SELECT * FROM avion WHERE id = ?',[id])
      res.json(rows[0]);
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};

export const deleteAvion = async (req, res) => {
   try {
      const [result] = await pool.query('DELETE FROM avion WHERE id = ?', [req.params.id]);
      if(result.affectedRows <= 0) return res.status(404).json({
         message: 'avion no found'
      })
   res.sendStatus(204);
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};