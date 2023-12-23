import express from "express"
import { delete_articles, get_articles, get_articlesId, post_articles, update_articles } from "../controllers/articles.controller.js";

export const articles_routes = express.Router()

//Manejo de Rutas
articles_routes.get('/articles' , get_articles)
articles_routes.get('/articles/:id',get_articlesId)

//Metodo Crear y Actualizar
articles_routes.post('/articles/create',post_articles)
articles_routes.put('/articles/update',update_articles)

//Metodo para eliminar un articulo
articles_routes.delete('/articles/delete/:id',delete_articles)