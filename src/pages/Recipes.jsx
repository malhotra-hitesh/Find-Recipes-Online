import React from 'react';
import { useState,useEffect } from 'react';
import Search from '../components/Search';
import RecipeList from '../components/RecipeList';
import { getRecipes } from '../services/API';


const Recipes = () => {
  const [searchedQuery, setSearchedQuery]= useState('pizza');
  const [recipes,setRecipes]= useState([]);

  useEffect(()=>{
   
    getSearchedResult();
  },[searchedQuery]);

  const getSearchedResult=async () => {
    let result=  await  getRecipes(searchedQuery);
    console.log("result",result);
    if(result && result.recipes){
      setRecipes(result.recipes);
    }
    
  }
  return (
    <>
    <div bgClass = "bg-image1">

     </div>
    <Search setSearchedQuery={setSearchedQuery}/>
    <RecipeList recipes={recipes} searchedQuery={searchedQuery}/>
    </>
  )
}

export default Recipes;