export class Product extends React.Component {
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