class ProductList extends React.Component {
  state = {
    products : []
  }
  // constructor(props) {
  //   super(props);
  //   this.handleProductUpVote = this.handleProductUpVote.bind(this);
  //   this.handleProductDownVote = this.handleProductDownVote.bind(this);
  // }
  componentDidMount() {
    this.setState({products : Seed.products});
  }
  handleProductUpVote = (productId) => {
    console.log(productId + 'st element was liked');
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
  handleProductDownVote = (productId) => {
    console.log(productId + 'st element was disliked');
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
  sortByPrice = () => {
    let newProducts = this.state.products;
    let sorted = newProducts.sort((a, b)=>(
      a.price - b.price
    ));
    this.setState({products : sorted})
  }
  sortByRating = () =>{
    let newProducts = this.state.products;
    let sorted = newProducts.sort((a, b)=>(
      a.votes - b.votes
    ));
    this.setState({products: sorted});
  }
  render() {
    // const products = this.state.products.sort((a, b)=>(
    //   b.votes - a.votes
    // ));
    const products = this.state.products;
    let productsList = products.map((product, i)=>(
      <Product key={product.id}
               id={product.id}
               title={product.title}
               description={product.description}
               imageUrl={product.productImageUrl}
               votes={product.votes}
               onVote={this.handleProductUpVote}
               onUnVote={this.handleProductDownVote}
               sortProduct={this.sortByPrice}
               price={product.price}
      />
    ))
    return (
      <div>
        <h2>Products list</h2>
        <div className="dropdown">
          <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort By: 
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dLabel">
            <li><a href="#" onClick={this.sortByPrice}>price</a></li>
            <li><a href="#" onClick={this.sortByRating}>rating</a></li>
            <li><a href="#">randomly</a></li>
          </ul>
        </div>
        <div className="list">{productsList}</div>
      </div>
    )
  }
}

class Product extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleUpVote = this.handleUpVote.bind(this);
  //   this.handleDownVote = this.handleDownVote.bind(this);
  // }
  handleUpVote = () => (this.props.onVote(this.props.id));
  handleDownVote = () => (this.props.onUnVote(this.props.id));

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
          <h4>{this.props.price} KZT</h4>
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

ReactDOM.render(
  <ProductList />,
  document.getElementById('mounter')
)