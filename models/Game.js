module.exports = (db,DataTypes) => {
    const game = db.define('game',{
        game_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        name : {type: DataTypes.STRING(1000), allowNull: false},
        description :{type: DataTypes.STRING(1000), allowNull: false}
    });
    return game;
};