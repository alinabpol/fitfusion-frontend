import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


import "../styling/BMI.css"



const UpdateRecipeForm = () => {

    const { id } = useParams();

    const [customRecipe, setCustomRecipe] = useState({
        title: '',
        time: '',
        ingredients: '',
        description: '',
        file: '',
      });
    
      useEffect(() => {
        fetch(`${process.env.REACT_APP_CUSTOM_URL}${id}`)
          .then((response) => response.json())
          .then((data) => {
            setCustomRecipe(data.data);
            console.log(data.data)
          })
          .catch((error) => {
            console.error(error);
          });
      }, [id]);
    
      const handleUpdate = (event) => {
        event.preventDefault();
    
        fetch(`${process.env.REACT_APP_CUSTOM_URL}${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(customRecipe),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Success:', response);
              // reset the form fields
              setCustomRecipe({
                title: '',
                time: '',
                ingredients: '',
                description: '',
                file: '',
              });
            } else {
              console.log('Failed to update recipe');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      return (
        <form className="container-recipe-form" onSubmit={handleUpdate}>
          <div>
            <label className="bmi-forms">Title</label>
            <input
              className="bmi-input"
              value={customRecipe.title}
              maxLength={100}
              placeholder={customRecipe.title}
              onChange={(e) =>
                setCustomRecipe({ ...customRecipe, title: e.target.value })
              }
            />
          </div>
    
          <div>
            <label>Time</label>
            <input
              className="bmi-input"
              value={customRecipe.time}
              onChange={(event) =>
                setCustomRecipe({ ...customRecipe, time: event.target.value })
              }
            />
          </div>
          <div>
            <label>Ingredients</label>
            <input
              className="bmi-input"
              value={customRecipe.ingredients}
              maxLength={500}
              onChange={(event) =>
                setCustomRecipe({ ...customRecipe, ingredients: event.target.value })
              }
            />
          </div>
          <div>
            <label>Description</label>
            <input
              className="bmi-input"
              value={customRecipe.description}
              maxLength={1000}
              onChange={(event) =>
                setCustomRecipe({ ...customRecipe, description: event.target.value })
              }

            />
          </div>
          <div>
            <label>Photo Url</label>
            <input
              className="bmi-input"
              value={customRecipe.file}
              maxLength={500}
              onChange={(event) =>
                setCustomRecipe({ ...customRecipe, file: event.target.value })
              }
            />
          </div>
    
          <div className="flex-container-submit-update-recipe">
            <br />
            <button className="button-styled" type="submit">
              Submit
            </button>
          </div>
        </form>
      );
    };

export default UpdateRecipeForm