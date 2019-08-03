import express, {Application, Request, Response} from 'express';

let app: Application = express();

// do i need to type everything

const port: any = process.env.PORT || 3000 




app.get("/", (req: Request, res: Response) => {
    res.send("Hello");
})

app.listen(port, () => {
    console.log(`Server running! open to localhost ${port}`)
})