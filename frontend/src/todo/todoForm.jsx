import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, clear, search } from './todoActions'


class TodoForm extends Component 
{
    constructor(props)
    {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentDidMount()
    {
        this.props.search()
    }

    keyHandler(e)
    {
        const {add, search, description, clear} = this.props

        if(e.key === 'Enter')
        {
            e.shiftKey ? search() : add(description)
        }
        else if(e.key === 'Escape')
        {
            clear()
        }
    }

    render()
    {
        const {add, search, clear, description} = this.props

        return (
            <div role='form' className='row todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                    value={this.props.description} onChange={this.props.changeDescription} onKeyUp={this.keyHandler}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={() => add(description)} />    
                    <IconButton style='info' icon='search' onClick={search} />         
                    <IconButton style='secondary' icon='close' onClick={() => clear()} />         
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, clear, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
