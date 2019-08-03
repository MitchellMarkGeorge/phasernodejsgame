import express, {Application, Request, Response} from 'express';
import { pathToFileURL } from 'url';

import * as path from 'path';



pathToFileURL

let app: Application = express();

// do i need to type everything

const port: any = process.env.PORT || 3000 

app.use(express.static('assets'));




app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.resolve('index.html'));
    // can also leave 
    //res.sendFile(path.resolve('src/client/html', 'index.html'));
    
})

app.listen(port, () => {
    console.log(`Server running! open to localhost ${port}`)
})