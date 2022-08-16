const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao'
    },
    titulo: {
        type: String,
        required: true  
    },
    preco: {
        type: Number,
        required: true  
    },
    comissao: {
        type: Number,
        required: true  
    },
    duracao: {
        type: Number,
        required: true  
    },
    recorrencia: {
        type: Number,
        required: true  
    },
    descricao: {
        type: Number,
        required: true  
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I', 'E'],
        default: 'A'
    },
});

module.exports = mongoose.model('Servico', servico);