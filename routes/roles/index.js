const express = require('express');
const { models } = require('../../libs/sequelize');
const router = express.Router();


router.post("/create", async (req, res) => {
    const { schema } = req.body;
    try {
        let [row, created] = await models.Role.findOrCreate({  // when DB drops i need to create a quick role, this will be pased on its corresponding file
            where: {
                id: schema.id
            },
            defaults: {
                id: schema.id,
                name: schema.name,
                description: schema.description
            }
        })
        if (created) res.status(201).send(row)
        else throw new Error('this role already exist or is invalid')
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router;