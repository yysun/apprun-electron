import { app, Component } from 'apprun';

export default class extends Component {
  state = 'top'

  view = state => <>
    <div>
      {state}
    </div>
  </>
  update = {
  }
}