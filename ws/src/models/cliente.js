const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório'],
    },
    telefone: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório'],
    },
    senha: {
        type: String,
        default: null
    },
    foto: {
        type: String,
        required: true  
    },
    dataNascimento: {
        tipo: String,
        required: true 
    },
    sexo: {
        type: String,
        enum: ['M', 'F'],
        required: true  
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A'
    },
    documento: {
        tipo: {
            type: String,
            required: true  
        },
        numero: {
            type: String,
            required: true  
        }
    },
});

module.exports = mongoose.model('Cliente', cliente);