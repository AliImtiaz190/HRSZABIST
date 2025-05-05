const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/',async(req,res)=>{
    try {
        res.json('WELCOME TO HR API');
    } catch (err) {
        res.status(500).json({Error: err.message})
    }
});

app.get('/emp',async(req,res)=>{
    try {
        const result = await pool.query('select * from employees');
            res.json(result.rows);
    }
     catch (error) {
        res.status(500).json({Error:err.message});
     }
    });


    app.get('/empTotal',async(req,res)=>{
        try {
            const result = await pool.query('select count(employee_id) from employees');
                res.json(result.rows);
        }
         catch (error) {
            res.status(500).json({Error:err.message});
         }
        });

        app.get('/countriersTotal',async(req,res)=>{
            try {
                const result = await pool.query('select count(country_name) from countries');
                    res.json(result.rows);
            }
             catch (error) {
                res.status(500).json({Error:err.message});
             }
            });


            app.get('/regionTotal',async(req,res)=>{
                try {
                    const result = await pool.query('select count(region_name) from regions');
                        res.json(result.rows);
                }
                 catch (error) {
                    res.status(500).json({Error:err.message});
                 }
                });

                app.get('/deptTotal',async(req,res)=>{
                    try {
                        const result = await pool.query('select count(department_name) from departments');
                            res.json(result.rows);
                    }
                     catch (error) {
                        res.status(500).json({Error:err.message});
                     }
                    });



const PORT =  process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connect Successfully...on PORT ${PORT}`);
});
