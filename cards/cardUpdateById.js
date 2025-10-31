import Card from './Model.js'

export default function cardUpdateById(req, res) { // PATCH localhost:3000/cards
    const cardId = req.params.cardId; // карточка

    Card.findByIdAndUpdate(cardId, req.body)
        .then(result => {
        res.status(200).json(result);
        })
        .catch(err => {
        console.log(err);
        res.status(400).json('Update failed!');
        })
};

