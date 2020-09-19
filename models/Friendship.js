module.exports = (db,DataTypes) => {
    const friendship = db.define('friendship',{
        friendship_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true }
    });
    return friendship;
};