class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }
  handleUpVote(){
    this.props.onVote(this.props.id);
  }
  handleDownVote(){
    this.props.onUnVote(this.props.id);
  }
  render() {
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl} />
        </div>
        <div className="caption">
          <h3>{this.props.title}</h3>
          <p className="">{this.props.description}</p>
          <button className="btn btn-success" onClick={this.handleDownVote}><i className="glyphicon glyphicon-thumbs-down" /></button>
          <button className="btn btn-primary" onClick={this.handleUpVote}><i className="glyphicon glyphicon-thumbs-up" /></button>
          <p className="pull-right">{this.props.votes} <i className="glyphicon glyphicon-heart" /></p>
        </div>
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Write comment..." />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Send!</button>
            </span>
          </div>
      </div>
    )
  }
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products : []
    }
    this.handleProductUpVote = this.handleProductUpVote.bind(this);
    this.handleProductDownVote = this.handleProductDownVote.bind(this);
  }
  componentDidMount() {
    this.setState({products : Seed.products});
  }
  handleProductUpVote(productId) {
    console.log(productId + 'st element was upvoted');
    console.log(this);
    let newProducts = this.state.products.map((product)=>{
      if(product.id === productId){
        return Object.assign({}, product, {votes: product.votes + 1});
      } else{
        return product;
      }
    });
    this.setState({products : newProducts});
  }
  handleProductDownVote(productId) {
    console.log(productId + 'st element was upvoted');
    console.log(this);
    let newProducts = this.state.products.map((product)=>{
      if(product.id === productId){
        return Object.assign({}, product, {votes: product.votes - 1});
      } else{
        return product;
      }
    });
    this.setState({products : newProducts});
  }
  render() {
    const products = this.state.products.sort((a, b)=>(
      b.votes - a.votes
    ));
    let productsList = products.map((product, i)=>(
      <Product key={product.id}
               id={product.id}
               title={product.title}
               description={product.description}
               imageUrl={product.productImageUrl}
               votes={product.votes}
               onVote={this.handleProductUpVote}
               onUnVote={this.handleProductDownVote}
      />
    ))
    return (
      <div>
        <h2>Products list</h2>
        {productsList}
      </div>
    )
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('mounter')
)