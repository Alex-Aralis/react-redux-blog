import { Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl'

export default () => (
    <Card shadow={0} style={{width: '512px', margin: 'auto auto 2rem'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
    <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
    </CardMenu>
    </Card>

    )


