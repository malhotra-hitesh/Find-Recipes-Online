import React from 'react';
import { useState } from 'react';
import { Grid, Form ,Input} from 'semantic-ui-react';


const Search = ({setSearchedQuery}) => {
const [value, setValue]= useState('');

const onFormSubmit = () =>{
  setSearchedQuery(value);
}

  return (
    <Grid column={2} textAlign="center" className="search-box">
      <Grid.Column>
        <h2 className="search-heading">
          Search Recipes</h2>
        <h4>Enter the Recipe name </h4>
        <Form onSubmit={onFormSubmit()}>

          <Input
          placeholder = "Recipe name"
          action = {{icon : 'search',color:'red'}}
          onChange={(e)=> setValue(e.target.value)}
          value={value}
          />
        </Form>
      </Grid.Column>
    
    </Grid>
  )
}

export default Search;