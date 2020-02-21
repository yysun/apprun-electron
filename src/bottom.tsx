import { app, Component } from 'apprun';

export default class extends Component {
  state = 'bottom'

  view = state => <>
    <div>
      {state}
    </div>
  </>
  update = {
  }
}