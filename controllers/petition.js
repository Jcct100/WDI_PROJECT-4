const Petition = require('../models/petition');

function petitionsIndex(req, res, next) {
  // console.log(req.currentUser);
  Petition
    .find({
      signees: { $in: [req.currentUser._id]},
      endDate: { $gt: new Date(Date.now()) }
    })
    .populate('createdBy goals')
    .exec()
    .then(petitions => res.json(petitions))
    .catch(next);
}

function petitionsCreate(req, res, next) {
  req.body.createdBy = req.currentUser.id;
  //you need to use currentUser.id as it is from the file lib/secureRoute on line 17
  Petition
    .create(req.body)
    .then(petition => res.status(201).json(petition))
    .catch(next);
}

function petitionsShow(req, res, next) {
  Petition
    .findById(req.params.id)
    .populate('createdBy goals')
    .exec()
    .then((petition) => {
      if(!petition) return res.notFound();
      res.json(petition);
    })
    .catch(next);
}

function petitionsUpdate(req, res, next) {

  // if(req.file) req.body.image = req.file.filename;
  //if you uploaded a file go and get it.

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
