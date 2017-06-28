export class cadastroPessoal_DAO {

    private PessoaSchema;
    private Pessoa;

    constructor(private mongoose) {
        this.PessoaSchema = mongoose.Schema(require('../schema/cadastroPessoa_Schema.js'));
        this.Pessoa = mongoose.model('Pessoa', this.PessoaSchema);
    }

    public save(pessoaVO): void {
        var pessoa = new this.Pessoa(pessoaVO);

        pessoa.save((err, pessoa) => {
            if (err)
                return console.error(err);
        });
    }

}