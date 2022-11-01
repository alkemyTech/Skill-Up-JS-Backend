const { Category } = require('../database/models')

const createCategory = async function(name){
    try{
      const catEx = await Category.findByPk(name)
      if(catEx){ return catEx}
    else {var cate = await Category.create({
            name: name,
        })
      }
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

  const modifyCategory = async function(id, name){
    try{
        await Category.update(
            {
            name: name,
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