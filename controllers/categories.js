const { Category } = require('../database/models')

const createCategory = async function(name, description){
    try{
    var cate = await Category.create({
            name: name,
            description: description
        })
      return cate}
    catch(e){
        console.log(e.message)
        res.json(e.message)
    }
  }

const getCategories = async function(){
    try{
    return await Category.findAll(
    )}
    catch(e){
        console.log(e.message)
        res.json(e.message)
    }
  }

  const getCategoryById = async function(id){
    try{
      var cat= await Category.findByPk(id)
    return (cat)
    }catch(e){
          console.log(e.message)
          res.json(e.message)
      }
  }

  const modifyCategory = async function(id, name, description){
    try{
        await Category.update(
            {
            name: name,
            description: description
            },
            {
            where: { id: id },
            }
        );
        res.send("Category updated");
        }
        catch(e){
            console.log(e.message)
            res.json(e.message)
        }
    }

  const deleteCategory = async function(id){
    try{
        var category = await Category.findByPk(id)
        await category.destroy()
        res.send("Category deleted")
    }
    catch(e){
        console.log(e.message)
        res.json(e.message)
    }
}

module.exports = {createCategory, getCategories, getCategoryById, modifyCategory, deleteCategory}