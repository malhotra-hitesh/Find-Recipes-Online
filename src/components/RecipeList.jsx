import React from 'react';
import RecipeListItem from './RecipeListItem';
import { Container,Header,Grid } from 'semantic-ui-react';


const RecipeList = ({recipes,searchedQuery}) => {
  return (
    
      <Container>
        <Header
        size='huge'
        content ={`Recipe list for ${searchedQuery}`}
        textAlign='center'

        />
        <Grid columns={4} doubling>
          {
            recipes && recipes.map(recipe =>(
              <Grid.Column>
                <RecipeListItem recipe={recipe}/>
              </Grid.Column>
            ))
          }
        </Grid>

      </Container>
    
    
  )
}

export default RecipeList;