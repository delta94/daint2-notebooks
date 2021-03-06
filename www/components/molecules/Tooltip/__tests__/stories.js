import React from 'react'
import { storiesOf } from '@storybook/react'

import { CommentIcon } from 'components/atoms/Icon'
import Alert from 'components/atoms/Alert'
import Button from 'components/atoms/Button'
import IconButton from 'components/molecules/IconButton'

import Tooltip from '..'

storiesOf('Tooltip', module)
  .add('default', () => (
    <Tooltip title={<div id="abc">default value</div>}>
      <Button style={{ margin: '50px' }}>Click me</Button>
    </Tooltip>
  ))
  .add('with Button', () => (
    <Tooltip title={<Alert>default value</Alert>}>
      <Button style={{ margin: '50px' }}>Click me</Button>
    </Tooltip>
  ))
  .add('with icon', () => (
    <Tooltip title={<Alert>default value</Alert>}>
      <CommentIcon style={{ margin: '50px' }} />
    </Tooltip>
  ))
  .add('with icon button', () => (
    <Tooltip title={<Alert>default value</Alert>}>
      <IconButton style={{ margin: '50px' }} icon={<CommentIcon />} />
    </Tooltip>
  ))
  .add('with event open + close', () => (
    <Tooltip
      onOpen={e => console.log('onOpen', e)}
      onClose={e => console.log('onClose', e)}
      title={<Alert>default value</Alert>}
    >
      <IconButton style={{ margin: '50px' }} icon={<CommentIcon />} />
    </Tooltip>
  ))
