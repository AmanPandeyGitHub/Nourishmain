import './Form.css';
import { useState } from 'react';
import MapComponent from './MapComponent';
import SearchLocationInput from './SearchLocationInput';
const Form = () => {

const [formData, setFormData] = useState({
    username: '',
    email: '',
    occupation: 'pkgfood',
    gender: '',
    languages: [''],
  })


  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });
 
  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  const callfunction = () =>{
    return console.log(formData);
  }


  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input className="form-control" name="email" onChange={onChangeHandler} placeholder="Enter your email address"/>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Contact</label>
          <input className="form-control" name="email" onChange={onChangeHandler} placeholder="Enter your mobile number"/>
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Category</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
          <option className="form-select-option" value="cookedmeal">Cooked Meal</option>  
          <option className="form-select-option" value="rawmaterial">Raw Materials</option>
          <option className="form-select-option" value="pkgfood">Packaged Food</option>
            
          </select>
          
        </div>
        {formData.occupation=="cookedmeal" ? <div className="form-group">
        <label htmlFor="gender" className="form-label">Available</label>
        <div class="checkbox-supercontainer">
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
            <label htmlFor="html">Dal</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
            <label htmlFor="css">Steam Rice</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
            <label htmlFor="javascript">Paneer</label>
          </div>
          <div class="checkbox-container">
          <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
          <label htmlFor="javascript">Roti</label>
          </div>
          <label htmlFor="javascript">Others:</label>
          <input type="text" name="languages" onChange={onChangeHandler} placeholder="Any other items"/>
            
        </div>
      </div> : <div></div>}

      {formData.occupation=="rawmaterial" ? <div className="form-group">
        <label htmlFor="gender" className="form-label">Available</label>
        <div class="checkbox-supercontainer">
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
            <label htmlFor="html">Rice</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
            <label htmlFor="css">Flour</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
            <label htmlFor="javascript">Vegetables</label>
          </div>
          <div class="checkbox-container">
          <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
          <label htmlFor="javascript">Fruits</label>
          </div>
          <div class="checkbox-container">
          <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
          <label htmlFor="javascript">Pulses</label>
          </div>
          <label htmlFor="javascript">Others:</label>
          <input type="text" name="languages" onChange={onChangeHandler} placeholder="Any other items"/>
            
        </div>
      </div> : <div></div>}
      
      {formData.occupation=="pkgfood" ? <div className="form-group">
        <label htmlFor="gender" className="form-label">Available</label>
        <div class="checkbox-supercontainer">
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
            <label htmlFor="html">Biscuits</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
            <label htmlFor="css">Namkeen</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
            <label htmlFor="javascript">Cakes</label>
          </div>
          <div class="checkbox-container">
          <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
          <label htmlFor="javascript">Sweets</label>
          </div>
          <div class="checkbox-container">
          <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
          <label htmlFor="javascript">Juices</label>
          </div>
          <label htmlFor="javascript">Others:</label>
          <input type="text" name="languages" onChange={onChangeHandler} placeholder="Any other items"/>
            
        </div>
      </div> : <div></div>}

      <div className='map-bottom'>
        <SearchLocationInput setSelectedLocation={setSelectedLocation} />
        <MapComponent class="gmap" selectedLocation={selectedLocation} />
      </div>

      


        <div className="form-group">
          <button className="btn dark-btn" type="submit" onClick={callfunction} >Submit</button>
          {console.log(formData)}
        </div>
      </form>
    </div>
  );
}

export default Form;
