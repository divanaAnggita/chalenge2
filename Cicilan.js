import React from 'react'

class Cicilan extends React.Component{
    constructor(){
        super();
        this.state = {
            nominal: null,
            bunga: null,
            periode: null,
            hitung: null
        }
    }
    hitung = (w) => {
        w.preventDefault();
        const nominal = parseInt(this.refs.nominal.value);
        const bunga = parseInt(this.refs.bunga.value)/100;
        const periode = parseInt(this.refs.periode.value);
        let hitung

        hitung = ((nominal * bunga)+ nominal )/periode;
        console.log(hitung)

        this.setState({
            nominal,bunga,periode,hitung
        })

        this.refs.nominal.value = null;
        this.refs.bunga.value = null;
        this.refs.periode.value = null;
    }
    render(){
        return(
            <div>
                <center>
                <div class="card text-white bg-dark mb-3" >
                    <h5> Cicilan Bank </h5>
                </div>
                    <form onSubmit={this.hitung}>
                        <label>Nominal :</label>
                        <input type="number" ref="nominal"></input>
                        <br/>
                        <label>Bunga :</label>
                        <input type="number" ref="bunga"></input>
                        <br/>
                        <label>Bulan :</label>
                        <input type="number" ref="periode"></input>
                        <br/>
                        <button class="btn btn-outline-success">Hitung</button>
                    </form>
                    <br/> <h5>Hasil</h5>
                        <p>{this.state.hitung}</p>
                </center>
            </div>
        );
    }
}
export default Cicilan;