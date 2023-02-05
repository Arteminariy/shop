/* eslint-disable */
import Accordion from './Accordion';

export default {
  title: "Accordion",
};

export const Default = () => <Accordion content={[{header: '1', text: '1'}, {header: '2', text: '2'}, {header: '3', text: '3'}]}/>;

Default.story = {
  name: 'default',
};
