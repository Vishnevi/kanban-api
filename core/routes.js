import cardRouter from "../cards/cardRoutes.js";


// роуты
export default function routes(app){
    app.use('/cards', cardRouter);
}

