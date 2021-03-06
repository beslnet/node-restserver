// ===========
// Puerto
// ===========
process.env.PORT = process.env.PORT || 3000;

// ===========
// Entorno
// ===========
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===========
// Vencimiento del Token
// ===========
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

// ===========
// SEED de autenticación
// ===========
process.env.SEED = process.env.SEED || 'mi-token-de-desarrollo'

// ===========
// Base de datos
// ===========

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
}
else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//=================
// Google Client ID
//=================
process.env.CLIENT_ID = process.env.CLIENT_ID || '603763442313-1i5ute1tic2voh5buprm253nqqavcghj.apps.googleusercontent.com'