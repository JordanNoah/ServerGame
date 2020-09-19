module.exports = (db,DataTypes) => {
    const user = db.define('user',{
        user_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        names: { type: DataTypes.STRING(1000), allowNull: false },
        bornDate: { type: DataTypes.STRING(50), allowNull: false },
        email: { type: DataTypes.STRING(200), allowNull: false },
        password: { type: DataTypes.STRING(200), allowNull: false },
        gender:{type:DataTypes.STRING(100),allowNull:false},
        country: { type: DataTypes.INTEGER(20), allowNull: true }
    });
    return user;
};