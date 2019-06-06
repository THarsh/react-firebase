import React, {Component} from 'react';
import Nav from './nav';

class App extends Component {
    render() {

        return (<div>
            <Nav/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="input-section">
                            <input type="text" class="form-control" placeholder="text one" aria-label="Username" aria-describedby="basic-addon1"/>
                            <input type="text" class="form-control" placeholder="text two" aria-label="Username" aria-describedby="basic-addon1"/>
                            <button class="btn btn-outline-secondary" type="submit">GO</button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">First text</th>
                                    <th scope="col">Last text</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>);
    }
}

export default App;
