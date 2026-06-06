const { Client } = require('pg');

const client = new Client({
    host: 'database-1.c5g0e8kkgosm.us-east-2.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: 'EYllanes67',
    database: 'exagonal',
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000
});

async function test() {
    console.log('Conectando directamente a RDS (sin túnel)...');
    
    try {
        await client.connect();
        console.log('✅ CONEXIÓN DIRECTA EXITOSA!');
        const res = await client.query('SELECT NOW()');
        console.log('📅 Fecha:', res.rows[0]);
        await client.end();
    } catch (err) {
        console.error('❌ Error:', err.message);
        if (err.message.includes('timeout')) {
            console.log('\n⚠️ El puerto 5432 está bloqueado por tu ISP.');
            console.log('Solución: Usa túnel SSH o cambia el puerto de RDS');
        }
    }
}

test();