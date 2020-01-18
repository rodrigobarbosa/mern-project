const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

const usuarioSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String}
});

const UsuarioModel = mongoose
                        .model("usuarios", usuarioSchema);

app.get("/", (req, res) => {
    const usuario = new UsuarioModel({
        username: "rodrigo",
        password: ""
    });
    await usuario
            .save();

    res.json(usuario)
});

app.listen(8081, async () =>{
    await mongoose
            .connect("mongodb://localhost:27017/iesp");

    console.log("servidor rodando")
});