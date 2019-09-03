let messages = []
let id = 0

module.exports = {
    read: (req, res, next) => {
        res.status(200).send(messages)
    },
    create: (req, res, next) => {
        messages.push({
            id: id,
            time: req.body.time,
            text: req.body.text 
        })
        id = id + 1
        res.status(200).send(messages)
    },
    update: (req, res, next) => {
        let index = null
        messages.forEach(el => {
            if (el.id == req.params.id){
                index = messages.indexOf(el)
                messages.splice(index, 1, {
                    id: parseInt(req.params.id, 10),
                    time: req.body.time || messages.text,
                    text: req.body.text
                })
            }
        })
/*         messages.splice(index, 1, {
            id: parseInt(req.params.id, 10),
            time: req.body.time,
            text: req.body.text
        }) */
        res.status(200).send(messages)
    },
    delete: (req, res, next) => {
        let index = null
        messages.forEach(el => {
            if (el.id == req.params.id){
                index = messages.indexOf(el)
                messages.splice(index, 1)
            }
        })
        res.status(200).send(messages)
    }
}