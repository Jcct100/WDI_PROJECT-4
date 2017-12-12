const Petition = require('../models/petition');


function petitionsIndex(req, res, next) {
  Petition
    .find({ endDate: { $gt: new Date(Date.now()) } })
    .populate('createdBy')
    .exec()
    .then(petitions => res.json(petitions))
    .catch(next);
}

function petitionsCreate(req, res, next) {
  req.body.createdBy = req.currentUser.id;
  Petition
    .create(req.body)
    .then(petition => res.status(201).json(petition))
    .catch(next);
}

function petitionsShow(req, res, next) {
  Petition
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((petition) => {
      if(!petition) return res.notFound();
      res.json(petition);
    })
    .catch(next);
}

function petitionsUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Petition
    .findById(req.params.id)
    .exec()
    .then((petition) => {
      if(!petition) return res.notFound();
      petition = Object.assign(petition, req.body);
      return petition.save();
    })
    .then(petition => res.json(petition))
    .catch(next);
}

function petitionsDelete(req, res, next) {
  Petition
    .findById(req.params.id)
    .exec()
    .then((petition) => {
      if(!petition) return res.notFound();
      return petition.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function petitionsSign(req, res, next) {
  Petition
    .findById(req.params.id)
    .exec()
    .then((petition) => {
      if(!petition) return res.notFound();
      petition.signees.push(req.currentUser);
      return petition.save();
    })
    .then(petition => res.json(petition))
    .catch(next);
}



module.exports = {
  index: petitionsIndex,
  create: petitionsCreate,
  show: petitionsShow,
  update: petitionsUpdate,
  delete: petitionsDelete,
  sign: petitionsSign
};
