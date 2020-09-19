module.exports = (db,DataTypes) => {
    const score = db.define('score',{
        score_id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        quantity : {type: DataTypes.STRING(1000), allowNull: false},
        kind :{type: DataTypes.STRING(1000), allowNull: false}
    });
    return score;
};