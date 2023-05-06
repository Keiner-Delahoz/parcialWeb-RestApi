import {pool} from '../db.js'

export const getBus = async (req, res) => {
   try {
      const [rows] = await pool.query('SELECT * FROM bus')
      res.json(rows);
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};

export const getBusById = async (req, res) => {
   try {
      const [rows] = await pool.query('SELECT * FROM bus WHERE id = ?',[req.params.id])
      if(rows.length <= 0) return res.status(404).json({
         message: 'Bus no found'
      });
      res.json(rows[0])
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};

export const createBus = async (req, res) => {
   const {numPlaca,color,marca ,modelo,capacidadMax,numeroEjes,tieneBaño} = req.body;
   try {
      const [rows] = await pool.query('INSERT INTO bus (numPlaca, color, marca, modelo, capacidadMax, numeroEjes, tieneBaño) VALUES (?,?,?,?,?,?,?)',[numPlaca,color,marca ,modelo,capacidadMax,numeroEjes,tieneBaño]);
      res.send({
         id: rows.insertId,
         numPlaca,
         color,
         marca,
         modelo,
         capacidadMax,
         numeroEjes,
         tieneBaño,
      });
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};

export const updateBus = async (req, res) => {
   const {id} = req.params;
   const {numPlaca,color,marca ,modelo,capacidadMax,numeroEjes,tieneBaño} = req.body;
   try {
      const [result] = await pool.query(
         'UPDATE bus SET numPlaca = IFNULL(?,numPlaca), color = IFNULL(?,color),marca = IFNULL(?,marca),modelo = IFNULL(?,modelo),capacidadMax = IFNULL(?,capacidadMax),numeroEjes = IFNULL(?,numeroEjes),tieneBaño = IFNULL(?,tieneBaño) WHERE id = ?',[numPlaca,color,marca ,modelo,capacidadMax,numeroEjes,tieneBaño,id]);
      if(result.affectedRows === 0) return res.status(404).json({
         message: 'Bus no found'
      });
      const [rows] = await pool.query('SELECT * FROM bus WHERE id = ?',[id])
      res.json(rows[0]);
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};

export const deleteBus = async (req, res) => {
   try {
      const [result] = await pool.query('DELETE FROM bus WHERE id = ?', [req.params.id]);
      if(result.affectedRows <= 0) return res.status(404).json({
         message: 'Bus no found'
      })
   res.sendStatus(204);
   } catch (error) {
      return res.status(500).json({
         message: 'Something goes wrong'
      })
   }
};