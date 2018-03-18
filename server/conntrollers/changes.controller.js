const request = require("request-promise");
const db = require("../db");
const mongoose = require("mongoose");

function handleError(req) {
    return (err) => req.status(500).send(err);
}

function responde(res) {
    return (data) => res.json(data);
}

async function parsePage(url) {
    const data = await request.get(url);
    const paragraphs = [];
    data.replace(/<p>(.*?)<\/p>/g, function (p) {
        paragraphs.push(p.replace(/\<[^\>]*\>/g, ''));
    });
    return {
        title: /<title>(.*?)<\/title>/.exec(data)[1],
        paragraphs
    }
}

exports.index = function (req, res) {
    db.SuggestedChanges.find({}).exec()
        .then(responde(res))
        .catch(handleError(res))
};

exports.create = function (req, res) {
    const article = new db.SuggestedChanges(req.body);
    article.save()
        .then(responde(res))
        .catch(handleError(res))
};

exports.update = function (req, res) {
    const id = mongoose.mongo.ObjectId(req.params.id);
    Reflect.deleteProperty(req.body, "_id");
    db.SuggestedChanges.findByIdAndUpdate(id, req.body).exec()
        .then(responde(res))
        .catch(handleError(res))
};

exports.delete = function (req, res) {
    const id = mongoose.mongo.ObjectId(req.params.id);
    db.SuggestedChanges.find({_id: id}).remove().exec()
        .then(responde(res))
        .catch(handleError(res))
};

exports.parsePage = function (req, res) {
    parsePage(req.query.articleUrl)
        .then((data) => res.json(data).send())
        .catch(handleError)
};

