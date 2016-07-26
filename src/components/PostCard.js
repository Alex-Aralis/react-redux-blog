import { PropTypes } from 'react'
import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl'

const PostCard = ({body, title, favorited = false, onClick}) => (
    <Card shadow={0} style={{width: '512px', margin: 'auto auto 2rem'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{title}</CardTitle>
    <CardText>
    {body}
    </CardText>
    <CardActions border>
    <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="star" onClick={onClick} colored={favorited} />
    </CardMenu>
    </Card>
)

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
}

export default PostCard
