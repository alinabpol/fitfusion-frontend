import { useState } from "react";


import "../styling/BMI.css"



const RecipeForm = () => {

     const [ title, setTitle ] = useState("")
     const [ time, setTime ] = useState("")
     const [ ingredients, setIngredients ] = useState("")
     const [ description, setDescription ] = useState("")
     const [ file, setFile ] = useState("")


     const handleSubmit = (event) => {
        event.preventDefault(); 
    
        const recipe = {
          title,
          time,
          ingredients,
          description,
          file,
        };

        

        fetch(process.env.REACT_APP_CUSTOM_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipe),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Success:", response );
              // reset the form fields
              setTitle("");
              setTime("");
              setIngredients("");
              setDescription("");
              setFile("");
            } else {
              console.log("Failed to create recipe");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
    


    return(

        <form onSubmit={handleSubmit}>
        <div>
            <label className="bmi-forms">Title</label>
            <input className="bmi-input" value={title}  maxLength={100} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
            <label>Time</label>
            <input className="bmi-input" value={time} onChange={(event) => setTime(event.target.value)} />
        </div>
        <div>
            <label>Ingredients</label>
            <input className="bmi-input" value={ingredients} maxLength={500} onChange={(event) => setIngredients(event.target.value)} />
        </div>
        <div>
            <label>Description</label>
            <input className="bmi-input" value={description} maxLength={1000} onChange={(event) => setDescription(event.target.value)} />
        </div>
        <div>
            <label>Photo Url</label>
            <input className="bmi-input" value={file} maxLength={500} onChange={(event) => setFile(event.target.value)} />
        </div>

      <div>
        <br/>
        <button className='button-styled' type='submit'>Submit</button>
      </div>
    </form>   

    )
}

export default RecipeForm