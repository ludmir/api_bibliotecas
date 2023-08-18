const express = require("express");
const router = express.Router();

const LibroController = require("../controllers/libroController");


// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los libros
router.get("/", requiredScopes("read:libros"), LibroController.getAllLibros);

// Ruta para obtener un libro por id
router.get("/:id", requiredScopes("read:libros"), LibroController.getLibroById);

// Ruta para crear un nuevo Libro
router.post("/", requiredScopes("write:libros"), LibroController.createLibro);

// Ruta para actualizar un Libro existente
router.put("/:id", requiredScopes("write:libros"), LibroController.updateLibro);

// Ruta para eliminar un Libro
router.delete("/:id", requiredScopes("write:libros"), LibroController.deleteLibro);

module.exports = router;
