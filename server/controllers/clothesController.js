const uuid = require('uuid')
const path = require('path')
const {Clothes, ClothesInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ClothesController{
    async create(req, res, next){
        try{
            let {name, price, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const clothes = await Clothes.create({name, price, typeId, img: fileName})

            if(info){
                info = JSON.parse(info)
                info.forEach(i => 
                    ClothesInfo.create({
                    title: i.title,
                    description: i.description,
                    clothesId: clothes.id
                })
               )
            }

            return res.json(clothes)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
        
    }
    async getAll(req, res){
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let clothes;
        if(!typeId){
            clothes = await Clothes.findAndCountAll({limit, offset})
        }
        if(typeId){
            clothes = await Clothes.findAndCountAll({where:{typeId, limit, offset}})
        }
        return res.json(clothes)
    }
    async getOne(req, res){
        const {id} = req.params
        const clothes = await Clothes.findOne(
            {
                where: {id},
                include: [{model: ClothesInfo, as :'info'}]

            }
        )
        return res.json(clothes)
    }
}

module.exports = new ClothesController()