import connection from "../utils/conexion.js"

export const get_articles = async (req,res) => {
    const articles = await connection.query('SELECT * FROM articles')
    if(articles == {}){
        res.send('No se encontrar articulos')
    }
    res.send(articles[0]);
}

export const get_articlesId = async (req,res) => {
    const articles = await connection.query(`SELECT * FROM articles WHERE id_article = ?`,req.params.id)
    if(articles == {}){
        res.send('No se encontro el id del articulo')
    }
    res.send(articles[0])
}

export const post_articles = async (req, res) => {
    try {
        const {id_article,title, content, created_at } = req.body;

        const created_articles = await connection.query(
            'INSERT INTO articles (id_article, title, content, created_at) VALUES (?, ?, ?, ?)',
             [id_article,title, content, created_at],
        );

        console.log(created_articles);
        res.status(201).json({ message: 'Artículo creado correctamente' });
    } catch (error) {
        console.error('Error al insertar el artículo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const update_articles = async (req,res) => {
    try{
        const {id_article,title,content,created_at} = req.body
        const update = await connection.query('UPDATE  articles SET title = ? , content = ?, created_at = ? WHERE id_article = ?',[title,content,created_at,id_article]);
        console.log(update);
        if(update.affectedRows = 1){
            res.status(200).json({message: 'Articulo actualizado correctamente'})
        }else{
            res.status(400).json({message: 'Error al actualizar el articulo'})
        }

    }catch(error){
        console.error('Error al actualizar el articulo: ', error);
        res.status(500).json({error: 'Error al actualizar el blog'})
    }
}

export const delete_articles = async (req, res) => {
    try {
        const deletes = await connection.query(`DELETE FROM articles WHERE id_article = ?`,req.params.id)
        console.log(deletes);
        if (deletes.affectedRows = 1) { // Corrige la condición aquí
            res.status(200).json({ message: 'Articulo eliminado correctamente' });
        } else {
            res.status(400).json({ message: 'Error al eliminar el articulo' });
        }
    } catch (error) {
        console.error('Error al eliminar el usuario: ', error);
        res.status(500).json({ error: 'Error al eliminar el blog' });
    }
};