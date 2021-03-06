import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { CardActions, CardContent } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'

import { Card, CardList, CardMedia } from './ProfileStyles'

const taskIcon = require('../../images/task-icon.png')
const paymentIcon = require('../../images/payment-icon.png')
const toolsIcon = require('../../images/tools-icon.png')

const styles = theme => ({
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  }
})

class ProfileOptions extends Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <div>
          <Typography variant='headline' component='h3'>
            Bem vindo ao Gitpay!
          </Typography>
          <Typography component='p'>
            Saiba quais são os seus primeiros passos para começar
          </Typography>
        </div>

        <CardList>
          <Card>
            <CardMedia
              image={ taskIcon }
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography variant='headline' component='h2'>
                Tarefas
              </Typography>
              <Typography component='p'>
                Veja as tarefas que estão disponíveis para você e comece!
              </Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
              <Button size='small' color='primary'>
                <Link to={ '/profile/tasks' }>Ver tarefas</Link>
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardMedia
              image={ paymentIcon }
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography variant='headline' component='h2'>
                Pagamento
              </Typography>
              <Typography component='p'>
                Preencha os dados de pagamento para você receber pelas tarefas
                integradas
              </Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
              <Button size='small' color='primary'>
                <Link to={ '/profile/payment-options' }>
                  Configurar pagamento
                </Link>
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardMedia
              image={ toolsIcon }
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography variant='headline' component='h2'>
                Preferências
              </Typography>
              <Typography component='p'>
                Configure sua conta para ficar de acordo com suas preferências
              </Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
              <Button size='small' color='primary'>
                <Link to='/profile/preferences'>Configurar preferências</Link>
              </Button>
            </CardActions>
          </Card>
        </CardList>
      </div>
    )
  }
}

ProfileOptions.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileOptions)
