// ===========
// Puerto
// ===========
process.env.PORT = process.env.PORT || 3000;

// ===========
// Entorno
// ===========
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========
// Base de datos
// ===========

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
}
else {
    urlDB = 'mongodb+srv://usermongo:ERrEy9xguM8LSYt6@cluster0.blzfk.mongodb.net/test'
}

process.env.URLDB = urlDB;