import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '****************',
      month: '**',
      year: '**',
      name: 'name'
    }
  }

  handelChange = (e) => {
    if (e.target.value.length <= 20 && (e.target.value.match(/^[a-zA-Z+/S]/g) || (e.target.value === ""))) {
      this.setState({
        name: e.target.value.toUpperCase()
      })
    } else {
      alert('please enter a valid name');
      e.target.value = ''
      this.setState({
        name: 'name'
      })
    }
  }
  changeNumber = (e) => {
    if (e.target.value.length <= 16)
      this.setState({
        number: e.target.value.padEnd(16, '*')
      }); else {
      alert('please enter a valid card number')

    }
  }

  changeMonth = (e) => {
    if (e.target.value <= 12 && e.target.value > 0)
      if (e.target.value < 10)
        this.setState({
          month: e.target.value.padStart(2, '0')
        }); else {
        this.setState({
          month: e.target.value
        })
      }
    else {
      alert('please give a valid month')
      e.target.value = ''
      this.setState({
        month: '**'
      })
    }
  }

  changeYear = (e) => {
    this.setState({
      year: e.target.value
    })
  }
  render() {
    return (<div>
      <div className='credit-card'>
        <div className='part1'>
          <h1 className='text1'>Company name</h1>
          <img className="puce" src="https://previews.123rf.com/images/alancotton/alancotton1511/alancotton151100211/48042691-gros-plan-d-une-puce-de-carte-de-cr%C3%A9dit.jpg" alt='img1' />
          <p className='pg1' style={{ color: 'white' }}>{this.state.number}</p>
        </div>
        <div className='part2'>
          <h3 style={{ color: 'white' }}>{this.state.name}</h3>
          <div className='sub-part2'>
            <h3 style={{ color: 'white' }}>{this.state.month}/{this.state.year}</h3>
            <img className="img2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2MoQgnOI0eVfZfAwDB_KlVGoGMU5HdaI7k3FYr2R_VUkKxfiz&usqp=CAU' alt='img2' />
          </div>
        </div>
      </div>
      <form className="form">
        <label>name : </label>
        <input type="text" placeholder='enter your name' onChange={this.handelChange} />
        <label>card number : </label>
        <input type='number' placeholder='tap your card number' onInput={this.changeNumber} maxLength='16' />
        <label>date d'expiration : </label>
        <input type='number' placeholder='enter month' onChange={this.changeMonth} />
        <input type='number' placeholder='enter year' onChange={this.changeYear} />
      </form>
    </div>);
  }
}

export default App;
