import React, {Component} from 'react'

class Component1 extends Component {
    state = {
        "address": "Kathmandu",
        "phone": "412341234"
    }
    changeAddress = (add:String) => {
        this.setState({"address": add})
    }
    changePhoneNumber = (number:Number) => {
        this.setState({"phone": number})
    }
    changeAddressText=(event:any)=>{
        this.setState({"address":event.target.value})
    }
    render() {
        return (
            <div>
                <img src="favicon.ico" alt={"this is shit"}/>
                <p>{this.state.address}</p>
                <p>{this.state.phone}</p>
                <p>this is component 1</p>
                <button onClick={this.changeAddress.bind("this","Bhavnagar")}>Click</button>
                <button onClick={this.changePhoneNumber.bind("this",23412341234123  )}>Change number</button>

                <input type="text" value={this.state.address} onChange={this.changeAddressText}/>
            </div>)
    }
}
export default Component1