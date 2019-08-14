import React from 'react'

class Main extends React.Component{
    state = {
        data : ['Makan', 'Minum', 'Tidur', 'Jalan', 'Lari'],
        addTodo : ''
    }

    renderData = () => {
        var jsx = this.state.data.map((val,idx) => {
            return (
                <tr>
                    <td>{idx+1}</td>
                    <td>{val}</td>
                    <td><input type='button' value='DELETE' className='btn btn-danger btn-block' onClick={() => this.onBtnDel(idx)}/></td>
                </tr>
            )
        })

        return jsx
    }

    onBtnAdd = () => {
        var newData = this.state.data
        newData.push(this.state.addTodo)
        this.setState({data : newData})
        this.refs.input.value = ''
    }

    onBtnDel = (idx) => {
        var tempData = this.state.data
        tempData.splice(idx, 1)
        this.setState({data : tempData})
    }

    render(){
        return(
            <div className='container'>
                {/* TODO LIST */}
                <div className='row mt-3'>
                    <div className='col-4 offset-4'>
                        {/* RENDER TODO HERE */}
                        <table className='table table-borderless'>
                            {this.renderData()}
                        </table>
                    </div>
                </div>
                {/* TODO INPUT */}
                <div className='row mt-3'>
                    <div className='col-4 offset-4'>
                        <input type="text" className='form-control' onChange={() => this.setState({addTodo : this.refs.input.value})} ref='input'/>
                    </div>
                    <div className='col-2'>
                        <input type='button' className='btn btn-primary' value="ADD TODO" onClick={this.onBtnAdd}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 text-center'>
                        {this.state.data.length} Items
                    </div>
                </div>
            </div>
        )
    }
}

export default Main