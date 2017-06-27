var ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
    nome : ObjectId
  , descricao : String
  , valor : String
  ,imagem : String
  ,quantidade : number
});