import React, { use state } from 'react';
import PropTypes from 'prop-types';

const newCardForm = ({ createCardFunction }) => {
    // State to toogle form
    const [isVisible, setVisible] = useState(false);

    // State to submit new form 
    const [newCardMessage, setCardMessage] = useState({cardMessage: ''});

    // Event Handler to toggle form:
    const toggleCardForm = (event) =>  {
        event.preventDefault();
        // finish event handler
    }

 


    return (
        <section className='new-card-form'>
            <h1>Add A New Card</h1>
            <form>
                <label className='new-card-label'>New Card Message:</label>
                <input className='new-card-input' type='text' ></input>w
                <button className='new-card-submit-button'>submit</button>
            </form>
        </section>
    )
}


export default NewCard Form;