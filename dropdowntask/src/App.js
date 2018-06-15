import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = 
  {
    jenjang: 'Pilih Jenjang',
    list: 'Pilih Jenjang Dulu!',
    tingkat: []
  };

  prasekolah()
  {
    this.setState({
      jenjang: 'Pendidikan Pra Sekolah',
      list: 'Pendidikan Pra Sekolah',
      tingkat: ["PAUD (Pendidikan Anak Usia Dini", "TK (Taman Kanak-kanak)", "RA (Raudhatul Athfal)"]
    })
  };

  dasar()
  {
    this.setState({
      jenjang: 'Pendidikan Dasar',
      list: 'Pendidikan Dasar',
      tingkat: ["SD (Sekolah Dasar)", "MI (Madrasah Ibtidaiyah)", "SMP (Sekolah Menengah Pertama)", "MTs (Madrasah Tsanawiyah)"]
    })
  };

  menengah()
  {
    this.setState({
      jenjang: 'Pendidikan Menengah',
      list: 'Pendidikan Menengah',
      tingkat: ["SMA (Sekolah Menengah Atas)", "MA (Madrasah Aliyah)", "SMK (Sekolah Menengah Kejuruan)"]
    })
  };

  tinggi()
  {
    this.setState({
      jenjang: 'Pendidikan Tinggi',
      list: 'Pendidikan Tinggi',
      tingkat: ["D3 Diploma", "S1/D4 Sarjana", "S2 Magister", "S3 Doktoral"]
    })
  };


  render() {
    const pendidikan = this.state.tingkat.map((item, index) => {return <li key={index}>{item}</li>})
    return (
      <div className="col-md-4 col-md-offset-5">
        <div className="row input-group">
          <div className="dropdown">
            <button className="btn btn-success dropdown-toggle" data-toggle="dropdown" style={{width:250,marginTop:150}}>
            {this.state.jenjang} <span className="caret"></span></button>
              <ul className="dropdown-menu">
                  <li><a onClick={() => this.prasekolah()}>Pendidikan Pra Sekolah</a></li>
                  <li><a onClick={() => this.dasar()}>Pendidikan Dasar</a></li>
                  <li><a onClick={() => this.menengah()}>Pendidikan Menengah</a></li>
                  <li><a onClick={() => this.tinggi()}>Pendidikan Tinggi</a></li>
              </ul>
          </div>
          <br/><br/><br/>
          {this.state.list}
          {pendidikan}
        </div>
      </div>
    );
  }
}
export default App;
