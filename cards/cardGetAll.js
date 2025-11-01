import Card from './Model.js'

export default function cardGetAll(req, res) { // роут GET localhost:3000/cards
    //Card.find()
    //    .exec()
    //    .then(result => {
    //        res.status(200).json(result);
    //    }).catch(err => {
    //        console.log(err);
    //        res.status(400).json('Cards get all failed');
    res.send('Card GetAll');
    //});
}
