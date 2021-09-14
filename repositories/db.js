
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    "postgres://ekmfqkut:LgigTFFhpms0TayT8LYQzdgpBa1cDOZg@chunee.db.elephantsql.com/ekmfqkut",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;