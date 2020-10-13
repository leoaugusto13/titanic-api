const { Pool } = require('pg');


const pool = new Pool({ 
    host: 'localhost',
    user: 'postgres',
    password: 'L1e3o7a8#',
    database: 'titanic',
    port: '5432'
});


const getPeoples = async (req, res) => {
   const response = await pool.query('SELECT * FROM peoples');
   res.status(200).json(response.rows);
}

const getPeoplesById = async (req, res) => {
    const id = req.params.id;
   const response = await pool.query('SELECT * FROM peoples WHERE id = $1', [id] );
   res.json(response.rows);
}

const deletePeoples = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM peoples WHERE id = $1', [id]);
    console.log(response);
    res.json(`Passageiro ${id} deleteada com sucesso`);
    
}

const createPeoples = async (req, res) => {
    const { survived, pclass, name, sex, age, siblings, parents, fare }  = req.body;
    const response = await pool.query('INSERT INTO peoples (survived, pclass, name, sex, age, siblings, parents, fare) VALUES ( $1,$2, $3, $4, $5, $6, $7, $8)',
    [survived, pclass, name, sex, age, siblings, parents, fare]);
    console.log(response);
    res.json({
        message: 'Passageiro Adicionado com Sucesso',
        body: {
            peoples: { survived, pclass, name, sex, age, siblings, parents, fare }
        }
    })
    
};

const updatePeoples = async (req, res) => {
    const id = req.params.id;
    const { survived, pclass, name, sex, age, siblings, parents, fare }  = req.body;
    const response = await pool.query('UPDATE peoples SET  survived = $1, pclass = $2, name = $3, sex = $4, age = $5, siblings = $6, parents = $7, fare = $8 WHERE id = $9', [
        survived, 
        pclass, 
        name,
        sex,
        age,
        siblings,
        parents,
        fare, 
        id
    ]);
    console.log(response);
    res.json('Passageiro Atualizado com sucesso');
}

module.exports = {
    getPeoples,
    createPeoples, 
    getPeoplesById, 
    deletePeoples,
    updatePeoples
}