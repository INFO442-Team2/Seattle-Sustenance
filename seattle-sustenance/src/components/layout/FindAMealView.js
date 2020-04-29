import React, {Component} from 'react';



// form for users to enter in their filters 
// required prop: GoController
class FindAMealView extends Component {
    constructor(props) {
        super(props)
    }

    // displays upload form
    render() {
        return (
            <div>
                <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Age</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Gender</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Meal Type</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </form>
            </div>
        )
    }

    // makes POST call to web server, sending image and receiving back response
    // Note: this logic is implemented in the PhotoController
    onSubmit = event => {
        // call GoController
    }
}



export default FindAMealView;