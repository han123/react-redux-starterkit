import React from 'react';
import { connect } from 'react-redux'
import { addElement, removeElement } from '../actions/simplelistActions';


@connect((store) => {
    return {
        simplelist: store.simplelist,
    }
})
export default class Home extends React.Component {
    addElement(){
        const el = this.refs.elementText.value;
        this.props.dispatch(addElement(el));
    }

    removeElement(el){
        console.log(el);
        this.props.dispatch(removeElement(el));
    }

    render() {
        const {simplelist} = this.props;
        return (
            <div>
                <input ref='elementText' type='text' placeholder='Enter a text' />
                <button onClick={this.addElement.bind(this)}>add Element</button>
                    {simplelist.map((el, i) => {
                        return (
                            <div class="row" key={i}>
                                <div class='col-xs-3'>
                                    {el}
                                </div>
                                <div class='col-xs-2'>
                                    <button class='btn' onClick={this.removeElement.bind(this, el)}>remove</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

