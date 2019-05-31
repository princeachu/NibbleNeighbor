module.exports = function(sequelize, DataTypes){
    let User = sequelize.define("User", {
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[4,20],
                notContains: " "
            }
        },
        name:{
            type: DataTypes.STRING
        },
        age:{
            type: DataTypes.INTEGER
        },
        weight:{
            type: DataTypes.INTEGER
        }
    });

    User.associate = function(models){
        User.hasMany(models.Recipe,{
            onDelete: "cascade"
        });
    };

    return User;
}
