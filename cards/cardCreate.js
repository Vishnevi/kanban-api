import Card from './Model.js'

export default function cardCreate(req, res) { // POST localhost:3000/cards
    const newCard = new Card({
        name: req.body.name,
        status: req.body.status,
        priority: req.body.priority
    });

    newCard.save()
        .then(() => {
        res.status(200).json('Card Created!');
        })
        .catch(err => {
            console.log(err);
            res.status(400).json('Card not created!');
        });
};

