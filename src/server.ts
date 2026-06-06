import app from './app';
import { sequelize } from './config/database';
import { env } from './config/env';

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected');
        
        app.listen(env.PORT, () => {
            console.log(`🚀 Server running on http://localhost:${env.PORT}`);
        });
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

startServer();