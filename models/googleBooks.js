module.exports = (Schema, model) => {
  const Books = new Schema({
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String
  })
  return model('Books', Books)
}