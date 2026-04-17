require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' })); // Allow frontend origin
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.get('/health', (req, res)=>{
    try{
        res.status(200).json({status: 'okay', message: "Server is running!"});
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);
});