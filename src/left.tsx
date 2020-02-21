import { app, Component } from 'apprun';

export default class extends Component {
  state = 'left'

  view = state => <>
    <div>
      {state}
    </div>
  </>
  update = {
  }
}