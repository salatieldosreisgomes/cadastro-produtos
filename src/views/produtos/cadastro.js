import React from 'react'

export default class CadastroProduto extends React.Component{

    state = {
        nome: '',
        sku: '',
        descricao: '',
        preco: 0,
        fornecedor: ''
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeCampo = event.target.name
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" name="nome" value={this.state.nome} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" name="sku" value={this.state.sku} className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                        <div className="form-group">
                            <label>Descrição: </label>
                            <textarea name="descricao" value={this.state.descricao} className="form-control"></textarea>
                        </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type="text" name="preco" value={this.state.preco} className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input type="text" name="fornecedor" value={this.state.fornecedor} className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary">Limpar</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}