import { PropTypes } from 'react'
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl'
import RouterButton from '../containers/RouterButton'

const PostCard = ({post:{body, title, favorited = false}, onClick}) => (
    <Card shadow={0} style={{width: '512px', margin: 'auto auto 2rem'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{title}</CardTitle>
    <CardText>
    {body}
    </CardText>
    <CardActions border>
    <RouterButton colored to="/new" >
    RouterButton
    </RouterButton>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="star" onClick={onClick} colored={favorited} />
    </CardMenu>
    </Card>
)

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default PostCard
