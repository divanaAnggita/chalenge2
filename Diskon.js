import React from 'react';

class Diskon extends React.Component{
    constructor(){
        super();
        this.state = {
            harga: null,
            ppn: null,
            diskon: null,
            hitung: null
        }
    }
    hitung = (a) => {
        a.preventDefault();
        const ppn = parseInt(this.refs.ppn.value)/100;
        const diskon = parseInt(this.refs.diskon.value)/100;
        const harga = parseInt(this.refs.harga.value);
        let hitung;

        hitung = harga + (harga*ppn) - (harga*diskon);
        console.log(hitung);

        this.setState({
            harga,ppn,diskon,hitung
        });
        this.refs.harga.value = null;
        this.refs.ppn.value = null;
        this.refs.diskon.value = null;
    }
    render(){
        return(
            <div>
                <center>
                <div class="card text-white bg-dark mb-3" >
                    <h5> Menghitung Harga Akhir </h5>
                </div>
                <form onSubmit={this.hitung}>
                    <label>Harga Awal : </label>
                    <input type="number" ref="harga"></input>
                    <br/>
                    <label>PPN : </label>
                    <input type="number" ref="ppn"></input>
                    <br/>
                    <label>Diskon : </label>
                    <input type="number" ref="diskon"></input>
                    <br/>
                    <button class="btn btn-outline-success">Hitung</button>
                </form>
                <br/> <h4>Harga Akhir</h4>
                <p>{this.state.hitung}</p>
                </center>
            </div>
        )
    }
}
export default Diskon