class Product extends React.Component {
  render() {
    return (
      <div className='column'>
        <div className="ui card">
          <div className="content">
            <div className="right floated meta">14h</div>
            <a href={this.props.url}><img className="ui avatar image" src={this.props.submitterAvatarUrl} /> </a>
            {this.props.title}
          </div>
          <div className="image">
            <img src={this.props.productImageUrl} />
          </div>
          <div className="content">
            <span className="right floated">
              <i className="heart outline like icon"></i>
              {this.props.votes}likes
            </span>
            <i className="comment icon"></i>
            3 comments
          </div>
          <div className="extra content">
            <p>{this.props.description}</p>
          </div>
          <div className="extra content">
            <div className="ui large transparent left icon input">
              <i className="heart outline icon"></i>
              <input type="text" placeholder="Add Comment..." />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProductList extends React.Component {
	  render(){
	  	const products = Seed.products.sort((a, b)=>(
	  		a.votes - b.votes
	  	));
	  	const productComponents = products.map((product)=>(
	  		<Product
	  			key={'product_' + product.id}
					id={product.id}
					title={product.title}
					description={product.description}
					url={product.url}
					votes={product.votes}
					submitterAvatarUrl={product.submitterAvatarUrl}
					productImageUrl={product.productImageUrl}
				/>
	  	));
		return(
			<div className = "ui four column grid">
				{productComponents}
			</div>
		)
	}
}

ReactDOM.render(
	<ProductList />,
	document.getElementById('content')
)