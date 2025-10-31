import Card from './Model.js'

export default function cardDelete(req, res) { // DELETE localhost:3000/cards
    const cardId = req.params.cardId; // карточка

    Card.findByIdAndDelete(cardId)
        .exec()
        .then(result => {
        res.status(200).json(result);
        })
        .catch(err => {
        console.log(err);
        res.status(400).json('Card not deleted!');
        });
};