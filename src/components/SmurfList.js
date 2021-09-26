import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
// import { fetchSmurfs } from '../actions/index'; // NEVER EVER EVER copy and paste imports. One '.' cost me 20 minutes.



const SmurfList = (props) => {

    const { isLoading, smurfs } = props;

    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@', props)
    // const isLoading = false; // Was a statid variable.
    // const testSmurf = {
    //     id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name: '@@@@@@@@@@@@@@Poppa Smurf',
    //     position: 'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    // }
    

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="listContainer">


            {/* <Smurf smurf={testSmurf} /> */}
            {smurfs.map(smurf => (<Smurf key={smurf.id} smurf={smurf} />))}  {/* This part was hard for me. */}

        </div>
    );
}

const mapStateToProps = state => ({  // needs parentheses if an implicit return, otherwise 'return {}' needed.
    isLoading: state.isLoading,
    smurfs: state.smurfs
})

// export default connect(mapStateToProps, { fetchSmurfs })(SmurfList)  //  TEST BELOW WHEN DONE, may not need fetch..
export default connect(mapStateToProps)(SmurfList)       // Guess it works either way ^         





// Task List:
// 1. [x] Connect the smurfs and loading state values to the SmurfList component.

// 2. [x] Replace the single Smurf component instance with a map return a Smurf 
//    component for each entry in the smurfs list.

// 3. [x] Replace the static isLoading variable with the state loading variable.