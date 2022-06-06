
import express  from'express';
import bodyParser  from'body-parser';
import cors  from'cors';
import mongoose from 'mongoose';
import  {CONFIG}  from './src/config/config.js';
import { siteRoute} from "./src/routes/router.js"
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/site', siteRoute);
const uri = "mongodb://localhost:27017/blaze";



mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},function (err,res) {
    console.log("db connected");
});






const port = CONFIG.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));