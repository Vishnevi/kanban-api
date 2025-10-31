import cardRouter from "../cards/cardRoutes.js";
import homeRouter from "../home/homeRoutes.js";

// роуты
export default function routes(app){
    app.use('/cards', cardRouter);
    app.use('/', homeRouter);
}

